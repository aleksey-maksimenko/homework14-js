import React from 'react';
import AuthForm from '../components/AuthForm';

function LoginPage({ onLogin }) {
  return (
    <div className="page">
      <h2>Вход</h2>
      <AuthForm onLogin={onLogin} />
    </div>
  );
}

export default LoginPage;
