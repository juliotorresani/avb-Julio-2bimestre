import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-4 right-4 z-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg px-6 py-2 flex items-center justify-between rounded-3xl">
      {/* Logo ou título */}
      <Link
        to="/"
        className="text-white text-2xl font-extrabold tracking-wide hover:text-yellow-300 transition-colors duration-300 rounded-lg px-3 py-1"
      >
        Início
      </Link>

      {/* Link para favoritos */}
      <Link
        to="/favoritos"
        className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-300 rounded-lg px-3 py-1"
      >
        Favoritos ⭐
      </Link>
    </nav>
  );
};

export default Navbar;
