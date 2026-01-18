
import React from 'react';

const Suprimentos: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-300">
      <header className="sticky top-0 z-40 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">inventory_2</span>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Suprimentos</h2>
          </div>
          <button className="rounded-full w-10 h-10 hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">notifications</span>
          </button>
        </div>
      </header>

      <div className="px-4 py-3 sticky top-[60px] z-30 bg-background-light dark:bg-background-dark">
        <div className="flex w-full items-stretch rounded-xl h-12 shadow-sm bg-white dark:bg-[#1c2127]">
          <div className="text-slate-400 flex items-center justify-center pl-4">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input className="flex-1 bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 px-4 text-sm" placeholder="Buscar pedidos..."/>
          <button className="p-4 text-slate-500"><span className="material-symbols-outlined text-xl">tune</span></button>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4">
        <OrderCard status="Pendente" id="10293" construction="Edifício Horizonte" supplier="ABC Materiais" value="15.400,00" image="https://picsum.photos/seed/construction1/400/200" />
        <OrderCard status="Em Cotação" id="10294" construction="Residencial Aurora" supplier="Metalúrgica Silva" value="8.900,00" image="https://picsum.photos/seed/construction2/400/200" />
      </div>

      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center z-50">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};

const OrderCard = ({ status, id, construction, supplier, value, image }: any) => {
  const statusClass = status === 'Pendente' ? 'bg-orange-500' : status === 'Em Cotação' ? 'bg-primary' : 'bg-green-600';

  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-sm bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800">
      <div className="w-full h-32 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('${image}')` }}></div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <p className={`text-white ${statusClass}/80 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider`}>{status}</p>
          <p className="text-primary text-xs font-bold">#{id}</p>
        </div>
        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">{construction}</h3>
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mt-2">
          <span className="material-symbols-outlined text-sm">storefront</span>
          <p className="text-sm">{supplier}</p>
        </div>
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">Total</span>
          <p className="text-slate-900 dark:text-white text-lg font-bold">R$ {value}</p>
        </div>
      </div>
    </div>
  );
};

export default Suprimentos;
