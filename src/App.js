import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Courses from './components/Courses';
import PythonTest from './components/Tests/PythonTest';

function App() {
  const [activeView, setActiveView] = useState('login');

  const goBackToCourses = () => {
    setActiveView('courses');
  };

  const handleCourseSelect = (course) => {
    // Предполагаем, что 'course' это строка, указывающая на выбранный курс
    if (course === 'python') {
      setActiveView('pythonTest');
    }
  };

  return (
    <div className="App">
      {activeView === 'login' && <LoginForm onLoginSuccess={() => setActiveView('courses')} changeForm={() => setActiveView('register')} />}
      {activeView === 'register' && <RegistrationForm changeForm={() => setActiveView('login')} />}
      {activeView === 'courses' && <Courses onCourseSelect={handleCourseSelect} />}
      {activeView === 'pythonTest' && <PythonTest goBackToCourses={goBackToCourses} />}
      {activeView === 'pythonTest' && <PythonTest />}
      {/* Добавьте переключение для других тестов или компонентов при необходимости */}
    </div>
  );
}

export default App;