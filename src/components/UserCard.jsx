import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

const UserCard = ({ user, index }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.some(fav => fav.login.uuid === user.login.uuid);

  return (
    <div className="bg-white bg-opacity-80 rounded-xl shadow-xl p-6 flex flex-col items-center relative">
      <button
        onClick={() => toggleFavorite(user)}
        className={`absolute top-2 right-2 text-2xl ${
          isFavorited ? 'text-yellow-400' : 'text-gray-400'
        } hover:scale-125 transition-transform`}
        title="Favoritar"
      >
        {isFavorited ? '★' : '☆'}
      </button>

      <Link
        to={`/detalhes/${index}`}
        state={{ user }}
        className="flex flex-col items-center"
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
    </div>
  );
};

export default UserCard;
