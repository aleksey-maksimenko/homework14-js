import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ onLogout }) {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.clear();
    onLogout();
    navigate('/login');
  };

  return (
    <div className="header">
      <span id="user-name">{user || 'гость'}</span>
      <button onClick={handleLogout}>выйти</button>
    </div>
  );
}

export default Header;