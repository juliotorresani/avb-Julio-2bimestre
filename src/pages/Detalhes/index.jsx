import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';

const Detalhes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50 px-4">
        <p className="mb-4 text-gray-700 text-lg">
          Dados do usuário não encontrados.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Voltar para a lista
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-purple-200 to-indigo-200 p-8 flex justify-center items-center">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 flex flex-col items-center">
        <button
          onClick={() => navigate(-1)}
          className="self-start mb-6 px-4 py-2 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-600 transition"
        >
          &larr; Voltar
        </button>

        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="rounded-full border-8 border-purple-400 w-40 h-40 object-cover mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-3 text-center">
          {user.name.title} {user.name.first} {user.name.last}
        </h1>

        <div className="w-full space-y-3 text-gray-700 text-md">
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Telefone:</span> {user.phone}</p>
          <p><span className="font-semibold">País:</span> {user.location.country}</p>
          <p><span className="font-semibold">Estado:</span> {user.location.state}</p>
          <p><span className="font-semibold">Cidade:</span> {user.location.city}</p>
          <p><span className="font-semibold">Endereço:</span> {user.location.street.number} {user.location.street.name}</p>
          <p><span className="font-semibold">Idade:</span> {user.dob.age}</p>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
