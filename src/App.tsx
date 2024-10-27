import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import PassportForm from './components/PassportForm';
import PassportList from './components/PassportList';
import VisaForm from './components/VisaForm';
import VisaList from './components/VisaList';
import Navigation from './components/Navigation';

function App() {
  const [activeView, setActiveView] = useState<'passport-form' | 'passport-list' | 'visa-form' | 'visa-list'>('passport-list');

  const renderActiveView = () => {
    switch (activeView) {
      case 'passport-form':
        return <PassportForm />;
      case 'passport-list':
        return <PassportList />;
      case 'visa-form':
        return <VisaForm />;
      case 'visa-list':
        return <VisaList />;
      default:
        return <PassportList />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeView={activeView} onViewChange={setActiveView} />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderActiveView()}
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;