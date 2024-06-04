import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({onLoginSuccess, changeForm }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки данных на сервер
    onLoginSuccess();
  };

  return (
    <div className="form-container">
      <div className="form-title">Вход</div>
      <div className="form-box">
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Логин"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Пароль"
      />
      <button type="submit">Войти</button>
    </form>
        <button onClick={changeForm} className="register-button">Регистрация</button>
      </div>
    </div>
    
  );
}

export default LoginForm;