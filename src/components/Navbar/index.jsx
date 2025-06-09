import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-4 right-4 z-10 bg-gray-900 border border-gray-700 shadow px-6 py-3 flex items-center justify-between rounded-xl">
      <Link
        to="/"
        className="text-gray-100 text-2xl font-bold tracking-wider hover:text-gray-400 transition-colors duration-300 px-3 py-1"
      >
        Início
      </Link>

      <Link
        to="/favoritos"
        className="text-gray-100 text-lg font-medium hover:text-gray-400 transition-colors duration-300 px-3 py-1"
      >
        Favoritos ⭐
      </Link>
    </nav>
  );
};

export default Navbar;
