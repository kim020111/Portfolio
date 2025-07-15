import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo">KIM DEV</span>
        <ul className="navbar-menu">
          <li><a href="#home">홈</a></li>
          <li><a href="#about">소개</a></li>
          <li><a href="#journey">나의 여정</a></li>
          <li><a href="#projects">프로젝트</a></li>
          <li><a href="#skill">스킬</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;