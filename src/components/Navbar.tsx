import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FaHome, FaUserCircle } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();

  const handleLogout = () => {
    setToken(null);
    navigate('/');
  };

  return (
    <Card className="fixed top-0 left-0 w-full bg-blue-800 text-white py-3 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide flex items-center space-x-2"
        >
          <FaHome className="h-6 w-6 text-white" />
          <span>MealTicket</span>
        </Link>

        <div className="flex items-center space-x-4">
          {token ? (
            <>
              <Button
                variant="link"
                onClick={() => navigate('/dashboard')}
                className="text-white hover:underline flex items-center space-x-1"
              >
                <FaUserCircle className="h-5 w-5" />
                <span>Dashboard</span>
              </Button>
              <Button
                variant="destructive"
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow transition-all duration-200"
              >
                Cerrar Sesión
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="link"
                onClick={() => navigate('/login')}
                className="text-white hover:underline"
              >
                Iniciar Sesión
              </Button>
              <Button
                variant="default"
                onClick={() => navigate('/register')}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition-all duration-200"
              >
                Registrarse
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Navbar;
