import React from 'react';
import UseVoucherButton from '../hooks/UseVoucherButton';
import { VouchersReportData } from '../types';

interface VoucherItemProps {
  voucher: VouchersReportData['allVouchers'][0];
}

const VoucherItem: React.FC<VoucherItemProps> = ({ voucher }) => (
  <div className="flex justify-between items-center p-2 border-b">
    <span>
      {voucher.serviceType} - {voucher.user.username}
    </span>
    {!voucher.isUsed ? (
      <UseVoucherButton voucherId={voucher.id} />
    ) : (
      <span className="text-gray-500">Usado</span>
    )}
  </div>
);

export default VoucherItem;
