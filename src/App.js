import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));
  
  useEffect(() => {
    console.log('isAuth updated:', isAuth); 
  }, [isAuth]);
  
  useEffect(() => {
    navigator.serviceWorker.register('/service-worker.js');
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
              <HomePage onLogout={() => setIsAuth(false)} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={<LoginPage onLogin={() => setIsAuth(true)} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
