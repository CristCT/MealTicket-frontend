import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-start pt-40 min-h-screen bg-gradient-to-br from-gray-200 to-gray-300">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Bienvenido a MealTicket
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          La mejor aplicación para llevar el control de tickets.
        </p>
        <div className="flex flex-col space-y-4">
          <Button
            className="py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300"
            onClick={() => navigate('/login')}
          >
            Iniciar Sesión
          </Button>
          <Button
            className="py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-300"
            onClick={() => navigate('/register')}
          >
            Registrarse
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
