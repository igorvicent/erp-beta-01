
import React from 'react';

const Diario: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-300">
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary cursor-pointer">arrow_back_ios</span>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Relatório Diário</h2>
          </div>
          <span className="material-symbols-outlined text-slate-400">sync</span>
        </div>
      </header>

      <main className="p-4 space-y-6">
        <section>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Clima</h3>
          <div className="flex h-14 items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 p-1">
            <WeatherToggle icon="wb_sunny" label="Sol" checked />
            <WeatherToggle icon="cloud" label="Nuvens" />
            <WeatherToggle icon="rainy" label="Chuva" />
          </div>
        </section>

        <section>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Mão de Obra</h3>
          <div className="flex items-center gap-4 bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 justify-between">
            <div className="flex items-center gap-4">
              <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 size-10">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <p className="text-base font-medium">Total de Colaboradores</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 font-bold">-</button>
              <span className="font-bold text-xl">12</span>
              <button className="h-10 w-10 rounded-full bg-primary text-white font-bold">+</button>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Atividades</h3>
          <textarea className="w-full h-32 p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-sm" placeholder="O que foi feito hoje?"></textarea>
        </section>

        <section>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Galeria</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-square rounded-lg bg-slate-300 dark:bg-slate-800 overflow-hidden"><img src="https://picsum.photos/seed/d1/200" className="w-full h-full object-cover" /></div>
            <div className="aspect-square rounded-lg bg-slate-300 dark:bg-slate-800 overflow-hidden"><img src="https://picsum.photos/seed/d2/200" className="w-full h-full object-cover" /></div>
            <div className="aspect-square rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400">
              <span className="material-symbols-outlined text-primary text-2xl">add_a_photo</span>
              <span className="text-[10px] uppercase font-bold mt-1">Add</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 pb-8 z-50 max-w-[480px] mx-auto">
        <div className="flex gap-3">
          <button className="flex-1 py-4 px-6 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-sm bg-white dark:bg-slate-800">Salvar</button>
          <button className="flex-1 py-4 px-6 rounded-xl bg-primary text-white font-bold text-sm flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">draw</span>
            Assinar
          </button>
        </div>
      </footer>
    </div>
  );
};

const WeatherToggle = ({ icon, label, checked }: any) => (
  <button className={`flex-1 h-full rounded-lg flex flex-col items-center justify-center gap-1 transition-all ${checked ? 'bg-primary text-white' : 'text-slate-500 dark:text-slate-400'}`}>
    <span className="material-symbols-outlined text-xl">{icon}</span>
    <span className="text-[10px] font-medium">{label}</span>
  </button>
);

export default Diario;
