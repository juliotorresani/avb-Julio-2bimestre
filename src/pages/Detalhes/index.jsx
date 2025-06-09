import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';

const Detalhes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-950 text-gray-400 px-4">
        <p className="mb-4 text-lg">
          Dados do usuário não encontrados.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-5 py-2 bg-gray-800 text-gray-100 rounded-lg hover:bg-gray-700 transition"
        >
          Voltar para a lista
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 p-8 flex justify-center items-center text-gray-100">
      <div className="bg-gray-900 rounded-xl border border-gray-700 max-w-md w-full p-8 flex flex-col items-center">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="rounded-full border-4 border-gray-700 w-40 h-40 object-cover mb-6"
        />
        <h1 className="text-3xl font-bold mb-4 text-center uppercase tracking-wide">
          {user.name.title} {user.name.first} {user.name.last}
        </h1>

        <div className="w-full space-y-3 text-gray-300 text-md">
          <p><span className="font-semibold text-gray-400">Email:</span> {user.email}</p>
          <p><span className="font-semibold text-gray-400">Telefone:</span> {user.phone}</p>
          <p><span className="font-semibold text-gray-400">País:</span> {user.location.country}</p>
          <p><span className="font-semibold text-gray-400">Estado:</span> {user.location.state}</p>
          <p><span className="font-semibold text-gray-400">Cidade:</span> {user.location.city}</p>
          <p><span className="font-semibold text-gray-400">Endereço:</span> {user.location.street.number} {user.location.street.name}</p>
          <p><span className="font-semibold text-gray-400">Idade:</span> {user.dob.age}</p>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
