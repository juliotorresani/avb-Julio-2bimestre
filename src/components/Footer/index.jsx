export default function Footer() {
  return (
    <footer className="fixed bottom-0 right-0 w-full bg-white dark:bg-slate-900 shadow-md">
      <div className="container flex flex-col items-center justify-between px-6 py-6 mx-auto lg:flex-row">
        <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
          Esporte360
        </span>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
          <a href="#" className="text-sm text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">Futebol</a>
          <a href="#" className="text-sm text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">Vôlei</a>
          <a href="#" className="text-sm text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">Natação</a>
          <a href="#" className="text-sm text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">Basquete</a>
          <a href="#" className="text-sm text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">Atletismo</a>
          <a href="#" className="text-sm text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">Contato</a>
        </div>

        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 lg:mt-0">
          © 2025 Esporte360. Inspirando saúde e movimento.
        </p>
        
      </div>
    </footer>
  );
}
