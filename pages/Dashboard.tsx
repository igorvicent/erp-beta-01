
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-300">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <span className="material-symbols-outlined text-primary">analytics</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 px-3">Dashboard Executivo</h2>
          <div className="flex gap-2">
            <button className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-card-dark text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>
            </button>
            <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary" style={{ backgroundImage: "url('https://picsum.photos/100')" }}></div>
          </div>
        </div>
      </header>

      <div className="px-4 pt-6 pb-2">
        <h3 className="text-lg font-extrabold tracking-tight">Resumo Global</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Visão geral consolidada • 24/05/2024</p>
      </div>

      <div className="flex overflow-x-auto gap-4 p-4 no-scrollbar">
        <div className="flex min-w-[260px] flex-col gap-3 rounded-xl p-5 bg-white dark:bg-card-dark shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Faturamento Total</p>
            <span className="material-symbols-outlined text-emerald-500">trending_up</span>
          </div>
          <p className="text-2xl font-bold leading-tight">R$ 1.234.567,89</p>
          <p className="text-emerald-500 text-sm font-bold">+5.2% <span className="font-normal text-slate-400 ml-1">vs mês ant.</span></p>
        </div>
        <div className="flex min-w-[200px] flex-1 flex-col gap-3 rounded-xl p-5 bg-white dark:bg-card-dark shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Saldo em Caixa</p>
            <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
          </div>
          <p className="text-2xl font-bold leading-tight text-primary">R$ 450.000,00</p>
          <p className="text-emerald-500 text-sm font-bold">+2.1%</p>
        </div>
      </div>

      <div className="px-4 pt-6">
        <div className="bg-white dark:bg-card-dark rounded-xl p-6 border border-slate-100 dark:border-slate-800">
          <h3 className="text-md font-bold mb-6">Avanço Físico Médio</h3>
          <div className="flex flex-col items-center justify-center py-4">
            <div className="relative flex items-center justify-center rounded-full size-48 shadow-lg border-8 border-slate-100 dark:border-slate-800">
                <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(#ff9900 68%, transparent 0)' }}></div>
                <div className="absolute inset-2 rounded-full bg-white dark:bg-card-dark flex flex-col items-center justify-center z-10">
                    <span className="text-4xl font-extrabold">68%</span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Global</span>
                </div>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <StageProgress label="Fundação" value={92} />
            <StageProgress label="Estrutura" value={60} />
            <StageProgress label="Acabamento" value={15} />
          </div>
        </div>
      </div>

      <div className="px-4 pt-8 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold tracking-tight">Alertas Urgentes</h3>
          <span className="bg-rose-500/10 text-rose-500 text-xs font-bold px-2 py-1 rounded">2 Críticos</span>
        </div>
        <div className="space-y-3">
          <AlertCard 
            title="Estouro de Orçamento" 
            desc="Obra Residencial Aurora: +15,4% acima do previsto." 
            type="critical" 
          />
          <AlertCard 
            title="Aprovação Pendente" 
            desc="Pedido #9921 - Aguardando liberação." 
            type="warning" 
          />
        </div>
      </div>
    </div>
  );
};

const StageProgress = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center gap-3">
    <span className="text-xs font-bold w-24">{label}</span>
    <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className="h-full bg-primary" style={{ width: `${value}%` }}></div>
    </div>
    <span className="text-xs font-bold text-slate-500">{value}%</span>
  </div>
);

const AlertCard = ({ title, desc, type }: { title: string; desc: string; type: 'critical' | 'warning' }) => (
  <div className={`flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-card-dark border-l-4 ${type === 'critical' ? 'border-rose-500' : 'border-amber-500'} shadow-sm`}>
    <div className={`p-2 rounded-lg ${type === 'critical' ? 'bg-rose-500/10' : 'bg-amber-500/10'}`}>
      <span className={`material-symbols-outlined ${type === 'critical' ? 'text-rose-500' : 'text-amber-500'}`}>
        {type === 'critical' ? 'warning' : 'pending_actions'}
      </span>
    </div>
    <div className="flex-1">
      <h4 className="text-sm font-bold">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{desc}</p>
    </div>
  </div>
);

export default Dashboard;
