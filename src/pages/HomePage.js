import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

function HomePage({ onLogout }) {
  const [netStatus, setNetStatus] = useState(navigator.onLine ? 'онлайн' : 'офлайн');

  useEffect(() => {
    const updateStatus = () => {
      setNetStatus(navigator.onLine ? 'онлайн' : 'офлайн');
    };
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
    };
  }, []);

  return (
    <div className="page">
      <Header onLogout={onLogout} />
      <div id="net-status" className={netStatus === 'онлайн' ? 'online' : 'offline'}>
        {`Статус сети: ${netStatus}`}
      </div>
      <h1>Добро пожаловать в приложение!</h1>
    </div>
  );
}

export default HomePage;
