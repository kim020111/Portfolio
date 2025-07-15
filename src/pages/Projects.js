import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "첫번째 프로젝트",
    thumbnail: "/project1-thumb.jpg",
    detail: {
      images: ["/project1-thumb.jpg"],
      stacks: ["Java, JavaFX, Oracle DB, JDBC"],
      period: "2025.02.03 - 2025.02.07",
      role: "개발 100%",
      features: ["회원 관리, 운동 기록 관리, 칼로리 계산, 하루 및 총 데이터 분석"]
    }
  },
  {
    id: 2,
    title: "두번째 프로젝트",
    thumbnail: "/project2-thumb.jpg",
    description: "클릭 시 상세 페이지로 이동합니다.",
    // 두번째 프로젝트에 Notion 링크 추가
    notionLink: "https://achieved-ferryboat-db6.notion.site/Urban_Village-20e1366431dd807bb261fbf58ae4c5ce"
  },
  {
    id: 3,
    title: "세번째 프로젝트",
    thumbnail: "/project3-thumb.jpg",
    description: "클릭 시 상세 페이지로 이동합니다.",
  }
];

function Projects() {
  const [modalProject, setModalProject] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="projects-grid-layout">
      {projects.map(project => (
        <div
          key={project.id}
          className="project-card"
          onClick={() => {
            if (project.id === 1) {
              setModalProject(project);
            } else if (project.id === 2 && project.notionLink) { // 두번째 프로젝트이고 notionLink가 있는 경우
              window.open(project.notionLink, '_blank'); // 새 탭으로 링크 열기
            } else {
              navigate(`/projects/${project.id}`);
            }
          }}
          tabIndex={0}
          role="button"
          aria-label={`${project.title} 상세보기`}
        >
          <img src={project.thumbnail} alt={project.title} className="project-thumb" />
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}

      {/* 1번 프로젝트 모달 */}
      {modalProject && (
        <div className="project-modal" onClick={() => setModalProject(null)}>
          <div className="project-modal-bg" />
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setModalProject(null)}>닫기 ✕</button>
            <h2>{modalProject.title}</h2>
            {modalProject.detail.images.map((img, idx) => (
              <img key={idx} src={img} alt={`${modalProject.title} 상세`} className="project-modal-img" />
            ))}
            <p className="project-modal-summary">{modalProject.detail.summary}</p>
            <ul>
              <li><strong>기간:</strong> {modalProject.detail.period}</li>
              <li><strong>기여도:</strong> {modalProject.detail.role}</li>
              <li><strong>기술스택:</strong> {modalProject.detail.stacks.join(", ")}</li>
            </ul>
            <h4>주요 기능</h4>
            <ul>
              {modalProject.detail.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;