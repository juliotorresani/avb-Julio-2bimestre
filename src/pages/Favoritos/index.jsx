import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import UserCard from '../../components/UserCard';

const Favoritos = () => {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8 pt-20">
      <h1 className="text-gray-100 text-4xl font-bold mb-12 text-center tracking-wider uppercase">
        Usuários Favoritados
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-400 text-xl">Nenhum usuário favoritado ainda.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {favorites.map((user, idx) => (
            <UserCard key={user.login.uuid} user={user} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
