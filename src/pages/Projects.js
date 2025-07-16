import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "첫번째 프로젝트",
    thumbnail: "/project1-thumb.jpg"
  },
  {
    id: 2,
    title: "두번째 프로젝트",
    thumbnail: "/project2-thumb.jpg",
    description: "클릭 시 상세 페이지로 이동합니다.",
    notionLink: "https://achieved-ferryboat-db6.notion.site/Urban_Village-20e1366431dd807bb261fbf58ae4c5ce"
  },
  {
    id: 3,
    title: "세번째 프로젝트",
    thumbnail: "/project3-thumb.jpg",
    description: "클릭 시 상세 페이지로 이동합니다."
  }
];

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="projects-grid-layout">
      {projects.map(project => (
        <div
          key={project.id}
          className="project-card"
          onClick={() => {
            if (project.id === 1) {
              window.open("https://hiddenpicture.tistory.com/41", "_blank");
            } else if (project.id === 2 && project.notionLink) {
              window.open(project.notionLink, "_blank");
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
    </div>
  );
}

export default Projects;
