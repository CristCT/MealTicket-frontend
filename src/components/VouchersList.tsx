import React from 'react';
import VoucherItem from './VoucherItem';
import { VouchersReportData } from '../types';

interface VouchersListProps {
  vouchers?: VouchersReportData['allVouchers'];
}

const VouchersList: React.FC<VouchersListProps> = ({ vouchers = [] }) => (
  <div>
    {vouchers.length === 0 ? (
      <p>No hay vales disponibles</p>
    ) : (
      vouchers.map((voucher) => (
        <VoucherItem key={voucher.id} voucher={voucher} />
      ))
    )}
  </div>
);

export default VouchersList;
