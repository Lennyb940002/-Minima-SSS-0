import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthForm } from './components/auth/AuthForm';
import { Header } from './components/layout/Header';
import { EcommerceDashboard } from './components/dashboard/EcommerceDashboard';
import SeanceSport from './components/sport/SeanceSport';

// Composant pour gérer le contenu principal avec transition
const MainContent = () => {
  const location = useLocation();
  const isSportPage = location.pathname === '/sceance-sport';

  return (
    <div
      className={`min-h-screen ${isSportPage ? 'bg-white' : 'bg-black text-white'}`}
      style={{
        transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out'
      }}
    >
      <Header />
      <main className="max-w-7xl mx-auto py-8">
        <Routes>
          <Route path="/" element={<Navigate to="/ecommerce" replace />} />
          <Route path="/ecommerce" element={<EcommerceDashboard />} />
          <Route path="/sceance-sport" element={<SeanceSport />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'register'>('login');

  const handleAuth = (email: string, password: string) => {
    console.log('Tentative d\'authentification : ', { email, password, type: authType });
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <AuthForm
          type={authType}
          onSwitch={() => setAuthType(authType === 'login' ? 'register' : 'login')}
          onSubmit={handleAuth}
        />
      </div>
    );
  }

  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;