import React from 'react';
import { Card } from '../components/ui/card';
import { UsersData } from '../types';
import { FaUsers } from 'react-icons/fa';

interface TotalUsersCardProps {
  loadingUsers: boolean;
  usersData?: UsersData;
}

const TotalUsersCard: React.FC<TotalUsersCardProps> = ({
  loadingUsers,
  usersData,
}) => (
  <Card className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
    <div className="absolute top-2 right-2 text-2xl text-gray-400 opacity-80">
      <FaUsers />
    </div>

    <div className="text-lg font-semibold text-gray-700">Total Usuarios</div>

    {loadingUsers ? (
      <div className="mt-2 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div className="bg-blue-500 h-full w-1/2 animate-pulse"></div>
      </div>
    ) : (
      <div className="text-3xl font-bold mt-2 text-blue-600">
        {usersData?.users.length || 0}
      </div>
    )}

    <div className="text-xs mt-1 text-gray-500">
      {loadingUsers ? 'Cargando datos...' : 'Actualizado recientemente'}
    </div>
  </Card>
);

export default TotalUsersCard;
