import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=20')
      .then(res => setUsers(res.data.results))
      .catch(() => alert('Erro ao carregar usuários'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen text-gray-500">Carregando usuários...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-600 via-pink-500 to-red-500 p-8">
      <h1 className="text-white text-4xl font-extrabold mb-12 text-center tracking-wide drop-shadow-lg">
        Usuários Aleatórios
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {users.map((user, idx) => (
          <Link
            key={idx}
            to={`/detalhes/${idx}`}
            state={{ user }}
            className="bg-white bg-opacity-80 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center cursor-pointer"
          >
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
              className="rounded-full border-4 border-pink-400 mb-4 w-28 h-28 object-cover"
            />
            <p className="text-gray-800 font-semibold text-lg text-center">
              {user.name.first} {user.name.last}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
