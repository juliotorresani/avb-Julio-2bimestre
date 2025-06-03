import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (user) => {
    setFavorites((prev) => {
      const exists = prev.some(fav => fav.login.uuid === user.login.uuid);
      return exists
        ? prev.filter(fav => fav.login.uuid !== user.login.uuid)
        : [...prev, user];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
