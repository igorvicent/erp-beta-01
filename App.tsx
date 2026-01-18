
import React, { useState } from 'react';
import { AppView } from './types';
import Dashboard from './pages/Dashboard';
import Obras from './pages/Obras';
import Orcamentos from './pages/Orcamentos';
import Financeiro from './pages/Financeiro';
import Suprimentos from './pages/Suprimentos';
import Diario from './pages/Diario';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'obras': return <Obras />;
      case 'orcamentos': return <Orcamentos />;
      case 'financeiro': return <Financeiro />;
      case 'suprimentos': return <Suprimentos />;
      case 'diario': return <Diario />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden relative">
      <main className="flex-1 overflow-y-auto pb-24">
        {renderView()}
      </main>
      <BottomNav currentView={currentView} setView={setCurrentView} />
    </div>
  );
};

export default App;
