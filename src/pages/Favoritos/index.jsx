import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import UserCard from '../../components/UserCard';

const Favoritos = () => {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-400 via-orange-400 to-red-400 p-8 pt-20">
      <h1 className="text-white text-4xl font-extrabold mb-12 text-center tracking-wide drop-shadow-lg">
        Usuários Favoritados
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-white text-xl">Nenhum usuário favoritado ainda.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {favorites.map((user, idx) => (
            <UserCard key={user.login.uuid} user={user} index={idx} />
          ))}
        </div>
      )}
    </div>

  );
};

export default Favoritos;
