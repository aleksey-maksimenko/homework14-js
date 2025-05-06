import React, { useState } from 'react';
import { login } from '../api';
import { useNavigate } from 'react-router-dom';

function AuthForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
	console.log('handleSubmit');
    if (!validateEmail(email)) {
      setError('некорректный email');
      return;
    }
    if (pass.length < 6) {
      setError('пароль слишком короткий');
      return;
    }
    try {
      const data = await login(email, pass);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.user);
      onLogin();
      navigate('/');
    } catch {
      setError('ошибка входа');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="пароль"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button type="submit" onClick={() => console.log('клик по кнопке')}>войти</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default AuthForm;
