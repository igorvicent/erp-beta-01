
import React from 'react';

const Obras: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between w-full">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">arrow_back_ios</span>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Obras</h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined">search</span>
            <span className="material-symbols-outlined">more_vert</span>
          </div>
        </div>
      </header>

      <div className="p-4">
        <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-xl font-extrabold tracking-tight">Edifício Horizonte</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">São Paulo, SP</p>
            </div>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Em Execução
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <ProgressCard label="Status Geral" value={58} color="primary" />
            <ProgressCard label="Financeiro" value={52} color="financial" />
          </div>
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="flex h-11 items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 p-1">
          <button className="flex-1 rounded-lg bg-white dark:bg-slate-700 text-primary font-bold text-sm h-full shadow-sm">Lista</button>
          <button className="flex-1 rounded-lg text-slate-500 dark:text-slate-400 font-bold text-sm h-full">Gantt</button>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4">
        <StageCard title="Fundação" date="01/01 - 15/02" physical={100} financial={100} completed />
        <StageCard title="Estrutura" date="16/02 - 20/06" physical={65} financial={50} />
        <StageCard title="Alvenaria" date="21/06 - 30/09" physical={10} financial={5} />
      </div>
    </div>
  );
};

const ProgressCard = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="flex-1 min-w-[140px] flex flex-col gap-1 rounded-lg p-4 bg-white dark:bg-slate-800 shadow-sm">
    <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">{label}</p>
    <p className={`text-${color === 'primary' ? 'primary' : 'financial'} text-2xl font-bold leading-tight`}>{value}%</p>
    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-1">
      <div className={`bg-${color === 'primary' ? 'primary' : 'financial'} h-1.5 rounded-full`} style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

const StageCard = ({ title, date, physical, financial, completed }: any) => (
  <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 overflow-hidden shadow-sm p-4">
    <div className="flex justify-between items-start mb-2">
      <h4 className={`font-bold text-base ${!completed && physical > 0 ? 'text-primary' : ''}`}>{title}</h4>
      {completed ? (
        <span className="material-symbols-outlined text-financial text-xl">check_circle</span>
      ) : (
        <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">{physical}%</span>
      )}
    </div>
    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{date}</p>
    <div className="space-y-2">
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] font-bold">
          <span className="text-primary/80">FÍSICO</span>
          <span>{physical}%</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-primary h-full" style={{ width: `${physical}%` }}></div>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] font-bold">
          <span className="text-financial/80">FINANCEIRO</span>
          <span>{financial}%</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-financial h-full" style={{ width: `${financial}%` }}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Obras;
