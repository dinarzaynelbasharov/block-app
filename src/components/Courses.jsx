import React from 'react';
import './Courses.css'; // Убедитесь, что у вас есть этот CSS файл
import 'devicon/devicon.min.css';

function Courses({ onCourseSelect }) {

    return (
        <>
          <div className="courses-title">Доступные курсы</div>
          <div className="courses-container">
            {<div className="courses-container">
      <div className="course" onClick={() => onCourseSelect('python')}>
        <i className="devicon-python-plain colored"></i>
        <span>Python</span>
      </div>
      <div className="course" onClick={() => console.log('Курс по JavaScript')}>
        <i className="devicon-javascript-plain colored"></i>
        <span>JavaScript</span>
      </div>
      <div className="course" onClick={() => console.log('Курс по Java')}>
        <i className="devicon-java-plain colored"></i>
        <span>Java</span>
      </div>
      <div className="course" onClick={() => console.log('Курс по C++')}>
        <i className="devicon-cplusplus-plain colored"></i>
        <span>C++</span>
      </div>
      <div className="course" onClick={() => console.log('Курс по Go')}>
        <i className="devicon-go-plain colored"></i>
        <span>Go</span>
      </div>
      <div className="course" onClick={() => console.log('Курс по C')}>
        <i className="devicon-c-plain colored"></i>
        <span>C</span>
      </div>
      <div className="course" onClick={() => console.log('Курс по Ruby')}>
        <i className="devicon-ruby-plain colored"></i>
        <span>Ruby</span>
      </div>
      <div className="course" onClick={() => console.log('Курс по C#')}>
        <i className="devicon-csharp-plain colored"></i>
        <span>C#</span>
      </div>
      <div className="course" onClick={() => console.log('Курс по TypeScript')}>
        <i className="devicon-typescript-plain colored"></i>
        <span>TypeScript</span>
      </div>
      <div className="course" onClick={() => console.log('Курс по PHP')}>
        <i className="devicon-php-plain colored"></i>
        <span>PHP</span>
      </div>
    </div>}
          </div>
        </>
      );
  
}

export default Courses;