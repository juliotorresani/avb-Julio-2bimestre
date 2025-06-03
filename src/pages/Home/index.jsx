import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../../components/UserCard'; // componente reutilizável

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=20')
      .then(res => setUsers(res.data.results))
      .catch(() => alert('Erro ao carregar usuários'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Carregando usuários...
      </div>
    );
  }

    return (
      <div className="min-h-screen bg-gradient-to-tr from-purple-600 via-pink-500 to-red-500 p-8 pt-20">
        <h1 className="text-white text-4xl font-extrabold mb-12 text-center tracking-wide drop-shadow-lg">
          Usuários Aleatórios
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {users.map((user, idx) => (
            <UserCard key={user.login.uuid} user={user} index={idx} />
          ))}
        </div>
      </div>
    );

};

export default Home;
