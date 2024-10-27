import React from 'react';
import { useMutation } from '@apollo/client';
import { USE_VOUCHER } from '../services/voucher';
import { toast } from 'react-toastify';

interface UseVoucherButtonProps {
  voucherId: string;
}

const UseVoucherButton: React.FC<UseVoucherButtonProps> = ({ voucherId }) => {
  const [useVoucher, { loading, error }] = useMutation(USE_VOUCHER);

  const handleUseVoucher = async () => {
    try {
      await useVoucher({
        variables: { voucherId },
      });
      toast.success('Vale usado exitosamente');
    } catch (err) {
      console.error(err);
      console.error(error);
      toast.error('Error al usar el vale');
    }
  };

  return (
    <button
      onClick={handleUseVoucher}
      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      disabled={loading}
    >
      {loading ? 'Procesando...' : 'Usar Vale'}
    </button>
  );
};

export default UseVoucherButton;
