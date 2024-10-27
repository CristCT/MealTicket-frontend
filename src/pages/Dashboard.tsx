import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../services/user';
import { GET_VOUCHERS_REPORT } from '../services/voucher';
import CreateVoucherForm from '../components/CreateVoucherForm';
import TotalUsersCard from '../components/TotalUsersCard';
import VouchersReportCard from '../components/VouchersReportCard';
import { UsersData, VouchersReportData } from '../types';

const Dashboard: React.FC = () => {
  const { data: usersData, loading: loadingUsers } =
    useQuery<UsersData>(GET_USERS);
  const {
    data: vouchersReportData,
    loading: loadingVouchersReport,
    refetch,
  } = useQuery<VouchersReportData>(GET_VOUCHERS_REPORT);

  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [counter, setCounter] = useState(0);
  const nextIncrementIndex = useRef(0);

  const handleRefresh = async () => {
    await refetch();
    setLastUpdated(new Date());
    setCounter(0);
    nextIncrementIndex.current = 0;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
      nextIncrementIndex.current += 1;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-50 min-h-screen">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <TotalUsersCard loadingUsers={loadingUsers} usersData={usersData} />

        <VouchersReportCard
          loadingVouchersReport={loadingVouchersReport}
          vouchersReportData={vouchersReportData}
          lastUpdated={lastUpdated}
          counter={counter}
          onRefresh={handleRefresh}
        />
      </div>

      <CreateVoucherForm usersData={usersData?.users || []} />
    </div>
  );
};

export default Dashboard;
