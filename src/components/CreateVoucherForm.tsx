import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Card } from '../components/ui/card';
import { CREATE_VOUCHER } from '../services/voucher';
import { toast } from 'react-toastify';

interface CreateVoucherFormProps {
  usersData: { id: string; username: string }[];
}

const CreateVoucherForm: React.FC<CreateVoucherFormProps> = ({ usersData }) => {
  const [userId, setUserId] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [createVoucher, { loading, error }] = useMutation(CREATE_VOUCHER);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createVoucher({
        variables: { userId, serviceType },
      });
      toast.success('Vale creado exitosamente');
      setUserId('');
      setServiceType('');
    } catch (err) {
      console.error(err);
      toast.error('Error al crear el vale');
    }
  };

  return (
    <Card className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl mt-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Crear Vale
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
          required
        >
          <option value="" disabled>
            Selecciona un usuario
          </option>
          {usersData.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>

        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
          required
        >
          <option value="" disabled>
            Selecciona el tipo de servicio
          </option>
          <option value="desayuno">Desayuno</option>
          <option value="almuerzo">Almuerzo</option>
          <option value="cena">Cena</option>
          <option value="extra">Extra</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg transition hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:outline-none"
          disabled={loading}
        >
          {loading ? 'Creando...' : 'Crear Vale'}
        </button>

        {error && (
          <p className="text-red-500 text-center text-sm mt-2">
            {error.message}
          </p>
        )}
      </form>
    </Card>
  );
};

export default CreateVoucherForm;
