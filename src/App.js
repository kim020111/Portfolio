import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skill from './pages/Skill';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* 메인 페이지(섹션별 스크롤) */}
          <Route
            path="/"
            element={
              <>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="journey"><Journey /></section>
                <section id="projects"><Projects /></section>
                <section id="skill"><Skill /></section>
              </>
            }
          />
          {/* 프로젝트 상세 페이지 */}
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;