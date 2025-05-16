export default function Main() {
  return (
    <main className="w-full px-6 py-10 mt-28 bg-gray-100 dark:bg-slate-900 transition-all duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 space-y-6 transition-all duration-300">
        
        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>22 de Abril, 2025</span>
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide hover:bg-green-500 transition-colors">
            Esportes
          </span>
        </div>

        <h1 className="text-3xl font-bold text-slate-800 dark:text-white leading-snug hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer">
          A importância dos esportes para a saúde física e mental
        </h1>

        <p className="text-slate-700 dark:text-slate-300 text-justify leading-relaxed">
          A prática esportiva vai além da competição. Esportes como futebol, vôlei, natação e atletismo proporcionam benefícios incríveis para o corpo e a mente, promovendo bem-estar, disciplina e socialização.
        </p>

        <p className="text-slate-700 dark:text-slate-300 text-justify leading-relaxed">
          Estudos mostram que atividades físicas regulares ajudam a prevenir doenças como obesidade, diabetes e depressão. Além disso, o esporte contribui para o desenvolvimento de habilidades como liderança, cooperação e superação de desafios.
        </p>

        <p className="text-slate-700 dark:text-slate-300 text-justify leading-relaxed">
          Nas escolas, o incentivo ao esporte melhora o desempenho dos alunos, pois alivia o estresse, aumenta a concentração e melhora a autoestima. Projetos esportivos também ajudam a afastar jovens da violência e das drogas.
        </p>

        <p className="text-slate-700 dark:text-slate-300 text-justify leading-relaxed">
          Seja de forma recreativa ou profissional, praticar esportes é uma escolha inteligente para quem busca uma vida equilibrada e saudável.
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-600">
          <a href="#" className="text-green-600 dark:text-green-400 text-sm font-medium hover:underline">Leia mais</a>
          <span className="text-slate-800 dark:text-slate-200 font-semibold text-sm">Stefany</span>
        </div>
      </div>
    </main>
  );
}
