import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-4 right-4 z-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg px-6 py-2 flex items-center justify-between rounded-3xl">
      {/* Logo ou título */}
      <Link
        to="/"
        className="text-white text-2xl font-extrabold tracking-wide hover:text-yellow-300 transition-colors duration-300 rounded-lg px-3 py-1"
      >
        Voltar
      </Link>

      {/* Botão hamburguer para mobile (pode remover se quiser) */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none hover:text-yellow-300 transition-colors duration-300 rounded-lg p-2"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
