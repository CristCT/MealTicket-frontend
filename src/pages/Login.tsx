import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useAuth } from '../context/AuthContext';
import { LOGIN_USER } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import InputField from '../components/ui/InputFieldProps';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser({ variables: { email, password } });
      const token = response.data.loginUser;
      setToken(token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-start pt-40 min-h-screen bg-gradient-to-br from-gray-200 to-gray-300">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Iniciar Sesión
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-300"
          />
          <InputField
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-300"
          />
          <Button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </Button>
        </form>
        {error && (
          <p className="text-red-500 mt-4 text-center">
            {error.message}. Intente nuevamente.
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
