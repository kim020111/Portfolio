import React from 'react';
import './Skill.css';

function Skill() {
  return (
    <div className="skill-section">
      <h1 className="skill-title">💡 Skills</h1>
      <div className="skill-category">
        <h2>Frontend</h2>
        <ul className="skill-list-text">
          <li>HTML5</li>
          <li>CSS3 (Sass, Styled-components)</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>React Router</li>
          <li>Axios</li>
          <li>Chart.js, react-chartjs-2</li>
        </ul>
      </div>
      <div className="divider" />
      <div className="skill-category">
        <h2>Backend</h2>
        <ul className="skill-list-text">
          <li>Java</li>
          <li>Spring Boot</li>
          <li>Spring Security</li>
          <li>JPA / Spring Data JPA</li>
          <li>MySQL</li>
          <li>Oracle DB</li>
          <li>JDBC</li>
        </ul>
      </div>
      <div className="divider" />
      <div className="skill-category">
        <h2>Tools & Etc</h2>
        <ul className="skill-list-text">
          <li>Git / GitHub</li>
          <li>VS Code</li>
          <li>STS4</li>
          <li>Figma</li>
          <li>Render (배포)</li>
          <li>Netlify</li>
          <li>지역정보 API</li>
        </ul>
      </div>
    </div>
  );
}

export default Skill;