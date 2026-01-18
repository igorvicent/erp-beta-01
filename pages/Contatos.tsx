
import React, { useState } from 'react';
import { Contact } from '../types';

const Contatos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cliente' | 'fornecedor' | 'prestador'>('cliente');
  const [search, setSearch] = useState('');

  const mockContacts: Contact[] = [
    { id: '1', name: 'João Silva Empreendimentos', document: '12.345.678/0001-90', email: 'contato@joaosilva.com', phone: '(11) 98888-7777', type: 'cliente' },
    { id: '2', name: 'Maria Oliveira Arquitetura', document: '98.765.432/0001-10', email: 'maria@arq.com', phone: '(11) 97777-6666', type: 'cliente' },
    { id: '3', name: 'ABC Materiais de Construção', document: '11.222.333/0001-44', email: 'vendas@abcmateriais.com', phone: '(11) 3333-4444', type: 'fornecedor' },
    { id: '4', name: 'Serralheria Modelo', document: '55.666.777/0001-55', email: 'modelo@serralheria.com', phone: '(11) 4444-5555', type: 'prestador' },
    { id: '5', name: 'Hidráulica Rápida', document: '99.000.111/0001-22', email: 'atendimento@hidraulica.com', phone: '(11) 95555-4444', type: 'prestador' },
  ];

  const filteredContacts = mockContacts.filter(c => 
    c.type === activeTab && 
    (c.name.toLowerCase().includes(search.toLowerCase()) || c.document.includes(search))
  );

  return (
    <div className="animate-in fade-in duration-300">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-extrabold tracking-tight">Contatos</h1>
          <button className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-card-dark">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">more_vert</span>
          </button>
        </div>
        
        <div className="flex w-full items-stretch rounded-xl h-11 overflow-hidden bg-slate-200 dark:bg-slate-800 mb-4">
          <div className="text-slate-400 flex items-center justify-center pl-4">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input 
            className="flex-1 bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 placeholder:text-slate-500 px-3 text-sm font-medium" 
            placeholder="Buscar por nome ou documento..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex p-1 bg-slate-200 dark:bg-slate-800 rounded-xl">
          <TabButton active={activeTab === 'cliente'} onClick={() => setActiveTab('cliente')} label="Clientes" />
          <TabButton active={activeTab === 'fornecedor'} onClick={() => setActiveTab('fornecedor')} label="Fornecedores" />
          <TabButton active={activeTab === 'prestador'} onClick={() => setActiveTab('prestador')} label="Prestadores" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {filteredContacts.length > 0 ? (
          filteredContacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <span className="material-symbols-outlined text-6xl mb-2 opacity-20">person_off</span>
            <p className="text-sm font-medium">Nenhum registro encontrado</p>
          </div>
        )}
      </div>

      <button className="fixed right-6 bottom-24 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 active:scale-95 transition-transform">
        <span className="material-symbols-outlined text-3xl">person_add</span>
      </button>
    </div>
  );
};

const TabButton = ({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) => (
  <button 
    onClick={onClick}
    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
      active 
        ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' 
        : 'text-slate-500 dark:text-slate-400'
    }`}
  >
    {label}
  </button>
);

const ContactCard = ({ contact }: { contact: Contact }) => {
  const typeLabels = {
    cliente: { label: 'Cliente', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    fornecedor: { label: 'Fornecedor', color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    prestador: { label: 'Prestador', color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' }
  };

  return (
    <div className="bg-white dark:bg-card-dark rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight mb-1">{contact.name}</h3>
          <p className="text-xs text-slate-500 font-medium">{contact.document}</p>
        </div>
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${typeLabels[contact.type].color}`}>
          {typeLabels[contact.type].label}
        </span>
      </div>
      
      <div className="grid grid-cols-1 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <span className="material-symbols-outlined text-sm">phone</span>
          <span className="text-xs font-medium">{contact.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <span className="material-symbols-outlined text-sm">mail</span>
          <span className="text-xs font-medium">{contact.email}</span>
        </div>
      </div>
      
      <div className="flex gap-2 mt-2">
        <button className="flex-1 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1">
          <span className="material-symbols-outlined text-sm">edit</span> Editar
        </button>
        <button className="flex-1 py-2 rounded-lg bg-primary/10 text-xs font-bold text-primary flex items-center justify-center gap-1">
          <span className="material-symbols-outlined text-sm">call</span> Contatar
        </button>
      </div>
    </div>
  );
};

export default Contatos;
