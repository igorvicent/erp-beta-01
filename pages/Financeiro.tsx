
import React from 'react';

const Financeiro: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-300">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="text-primary flex size-10 shrink-0 items-center justify-start">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
          </div>
          <h2 className="text-lg font-bold leading-tight flex-1 text-center">NFS-e</h2>
          <div className="flex w-10 items-center justify-end">
            <button className="text-primary"><span className="material-symbols-outlined text-2xl">tune</span></button>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="flex w-full items-stretch rounded-lg h-10 bg-[#f0f2f4] dark:bg-gray-800">
            <div className="text-slate-400 flex items-center justify-center pl-4">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input className="flex-1 bg-transparent border-none text-sm px-4" placeholder="Nº da Nota ou Cliente"/>
          </div>
        </div>
      </header>

      <div className="px-4 pt-4 pb-2">
        <p className="text-[#617589] text-xs font-bold uppercase tracking-wider">Maio 2024</p>
      </div>

      <div className="flex flex-col">
        <InvoiceItem id="202401" client="Construtora Silva & Filhos" date="15/05/2024" value="15.400,00" status="issued" />
        <InvoiceItem id="202402" client="Engenharia Norte S.A." date="14/05/2024" value="8.250,00" status="pending" />
        <InvoiceItem id="202403" client="Serralheria Modelo" date="12/05/2024" value="2.100,00" status="cancelled" />
      </div>

      <div className="fixed bottom-24 right-6">
        <button className="flex items-center gap-3 bg-primary text-white px-5 py-4 rounded-full shadow-2xl hover:bg-primary/90 transition-all active:scale-95">
          <span className="material-symbols-outlined text-2xl">add</span>
          <span className="text-sm font-bold pr-1">Emitir Nova NFS-e</span>
        </button>
      </div>
    </div>
  );
};

const InvoiceItem = ({ id, client, date, value, status }: any) => {
  const statusMap: any = {
    issued: { label: 'Emitida', class: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
    pending: { label: 'Pendente', class: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
    cancelled: { label: 'Cancelada', class: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' }
  };

  return (
    <div className="flex flex-col gap-4 bg-white dark:bg-gray-900 px-4 py-4 border-b border-gray-100 dark:border-gray-800">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-4">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
            <span className="material-symbols-outlined">description</span>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-base font-bold leading-tight">NFS-e #{id}</p>
            <p className="text-sm font-medium mt-1 text-slate-600 dark:text-slate-300">{client}</p>
            <p className="text-[#617589] text-xs mt-0.5">{date}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${statusMap[status].class}`}>
            {statusMap[status].label}
          </div>
          <p className={`text-base font-bold ${status === 'cancelled' ? 'line-through opacity-50' : ''}`}>R$ {value}</p>
        </div>
      </div>
    </div>
  );
};

export default Financeiro;
