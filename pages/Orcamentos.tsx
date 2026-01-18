
import React from 'react';

const Orcamentos: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-300">
      <header className="sticky top-0 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">construction</span>
            <h1 className="text-2xl font-extrabold tracking-tight">Orçamentos</h1>
          </div>
          <div className="flex gap-2">
            <button className="flex size-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </div>
        <div className="py-2">
          <div className="flex w-full items-stretch rounded-xl h-11 overflow-hidden bg-slate-200 dark:bg-slate-800">
            <div className="text-slate-400 flex items-center justify-center pl-4">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="flex-1 bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 placeholder:text-slate-500 px-3 text-sm font-medium" placeholder="Buscar por cliente..."/>
          </div>
        </div>
      </header>

      <main className="px-4 space-y-4 mt-4">
        <BudgetCard id="2023-001" title="Reforma Apto 402" client="Construtora Silva Ltda" value="45.000,00" status="approved" />
        <BudgetCard id="2023-004" title="Edifício Horizonte" client="João de Barro Emp." value="128.500,00" status="sent" />
        <BudgetCard id="2023-005" title="Casa de Campo" client="Ricardo Alencar" value="89.200,00" status="draft" />
      </main>

      <button className="fixed right-6 bottom-24 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 active:scale-90 transition-transform">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};

const BudgetCard = ({ id, title, client, value, status }: any) => {
  const statusColors: any = {
    approved: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    sent: "bg-blue-100 dark:bg-blue-900/30 text-primary",
    draft: "bg-slate-100 dark:bg-slate-800 text-slate-500",
    rejected: "bg-red-100 dark:bg-red-900/30 text-red-600"
  };

  return (
    <div className="flex flex-col rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">#{id}</span>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <h3 className="text-lg font-bold leading-tight mb-1">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{client}</p>
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <p className="text-2xl font-extrabold text-primary">R$ {value}</p>
        <button className="size-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
          <span className="material-symbols-outlined text-slate-500">more_horiz</span>
        </button>
      </div>
    </div>
  );
};

export default Orcamentos;
