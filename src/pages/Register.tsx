import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import InputField from '../components/ui/InputFieldProps';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [registrarUsuario, { loading, error }] = useMutation(REGISTER_USER);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage('Todos los campos son requeridos');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    try {
      await registrarUsuario({
        variables: { username, email, password },
      });
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-start pt-40 min-h-screen bg-gradient-to-br from-gray-200 to-gray-300">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Registro
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-300"
          />
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
          <InputField
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-300"
          />
          <Button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            disabled={loading}
          >
            {loading ? 'Registrando...' : 'Registrarse'}
          </Button>
        </form>
        {errorMessage || error ? (
          <p className="text-red-500 mt-4 text-center">
            {errorMessage || error?.message}. Intente nuevamente.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Register;
