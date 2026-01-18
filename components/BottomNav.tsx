
import React from 'react';
import { AppView } from '../types';

interface BottomNavProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, setView }) => {
  const navItems: { view: AppView; icon: string; label: string }[] = [
    { view: 'dashboard', icon: 'dashboard', label: 'Início' },
    { view: 'obras', icon: 'apartment', label: 'Obras' },
    { view: 'suprimentos', icon: 'inventory_2', label: 'Suprimentos' },
    { view: 'contatos', icon: 'group', label: 'Contatos' },
    { view: 'financeiro', icon: 'payments', label: 'Financeiro' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-background-dark/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 pb-8 pt-3 max-w-[480px] mx-auto">
      <div className="flex justify-around items-center px-4">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => setView(item.view)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentView === item.view ? 'text-primary' : 'text-slate-400 dark:text-slate-500'
            }`}
          >
            <span className={`material-symbols-outlined text-2xl ${currentView === item.view ? 'filled' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-bold uppercase">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
