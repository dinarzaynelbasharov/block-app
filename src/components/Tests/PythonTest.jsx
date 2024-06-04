import React, { useState } from 'react';
import './PythonTest.css';

const questions = [
  { id: 1, text: "Что делает функция len()?", options: ["Возвращает длину объекта", "Возвращает значение переменной", "Возвращает тип данных"], answer: "Возвращает длину объекта" },
  { id: 2, text: "Как создать список в Python?", options: ["[]", "{}", "()"], answer: "[]" },
  { id: 3, text: "Какой метод добавляет элемент в конец списка?", options: [".append()", ".add()", ".push()"], answer: ".append()" },
  { id: 4, text: "Как начинается индексация в Python?", options: ["0", "1", "-1"], answer: "0" },
  { id: 5, text: "Какой оператор используется для целочисленного деления?", options: ["/", "//", "%"], answer: "//" }
];

function PythonTest({ goBackToCourses }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="test-container">
        <button className="back-button" onClick={goBackToCourses}>Назад</button>
        {!showResult ? (
        <div className="question-container">
          <div className="question">{questions[currentQuestion].text}</div>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleOptionClick(option === questions[currentQuestion].answer)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result-container">
          <div>Ваш результат: {score} из {questions.length}</div>
        </div>
      )}
    </div>
  );
}

export default PythonTest;