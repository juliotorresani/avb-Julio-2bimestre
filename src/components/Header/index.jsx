export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-green-600 dark:text-green-400">
          Esporte360
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-slate-600 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400 transition-colors">Início</a>
          <a href="#" className="text-slate-600 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400 transition-colors">Modalidades</a>
          <a href="#" className="text-slate-600 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400 transition-colors">Eventos</a>
          <a href="#" className="text-slate-600 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400 transition-colors">Contato</a>
        </nav>

        <a href="#" className="text-sm font-semibold text-green-600 dark:text-green-400 hover:underline transition-colors">
          Minha Conta
        </a>
      </div>
    </header>
  );
}
