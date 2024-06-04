import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm({ changeForm }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки данных на сервер
  };

  const regFunction = () => {
    alert('Вы успешно зарегистрировались!');
    changeForm();
  };

  return (
    <div className="form-container">
      <div className="form-title">Регистрация</div>
      <div className="form-box">
      <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Электронная почта"
      />
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
      <button onClick={regFunction} type="submit">Зарегистрироваться</button>
    </form>
        <button onClick={changeForm} className="back-button">Назад</button>
      </div>
    </div>
    
  );
}

export default RegistrationForm;