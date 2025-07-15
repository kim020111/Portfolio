import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

const projectDetailsData = {
  1: {
    title: "첫번째 프로젝트",
    thumbnail: "/project1-thumb.jpg",
    description: "데스크탑 기반 건강 관리 애플리케이션", 
    images: ["/project1-main.jpg"], 
    summary: "사용자의 건강 관리를 돕는 데스크탑 애플리케이션입니다. 개인화된 운동 및 식단 관리를 통해 건강한 생활 습관 형성을 지원합니다.",
    period: "2025.02.03 - 2025.02.07",
    role: "개발 100%",
    stacks: ["Java", "JavaFX", "Oracle DB", "JDBC"],
    features: [
      "회원 가입 및 로그인 기능",
      "개인 운동 기록 관리 (운동 종류, 시간, 칼로리 소모 등)",
      "식단 기록 및 칼로리 계산",
      "일일 및 총 데이터 분석 시각화",
      "사용자 맞춤형 운동 추천"
    ],
    githubLink: "#",
    deployedLink: "#"
  },

  3: {
    title: "TalkMarket: 채팅 기반 중고거래 서비스",
    thumbnail: "/project3-thumb.jpg", 
    description: "채팅 기반 중고거래 서비스",
    projectOverview: {
      name: "TalkMarket 채팅 기반 중고거래 서비스",
      period: "2024.10.01 ~ 2024.12.31",
      members: "4명", 
      type: "채팅 기반 중고거래 플랫폼 (고객, 판매자 기능 분리)" 
    },
    teamMembers: [
      { name: "김대중" },
      { name: "참여자 2" },
      { name: "참여자 3" },
      { name: "참여자 4" }
    ],
    githubLink: "https://github.com/1643497/talkMarket",
    erdImage: "/erd-talkmarket.png",
    siteMapImage: "/sitemap-talkmarket.png",
    deployedLink: "https://talk-market-client.onrender.com/",

    technologiesUsed: {
      frontend: ["React", "React Router DOM", "Axios (REST API 통신)","JWT-Decode (토큰)","Chart.js, react-chartjs-2(차트/그래프)","SockJS, StompJS (웹소켓 실시간통신)"],
      backend: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "WebSocket","Thymeleaf"],
      database: ["MySQL(Railway 클라우드 DB)"],
      deployment: ["Render"],
      others: ["GitHub", "지역정보 API","STS4"]
    },

    features: [ 
      {
        description: "메인페이지",
        images: ["/메인페이지.png"] 
      },
      {
        description: "회원 가입 및 로그인 (JWT 기반 인증)",
        images: ["/회원가입.png", "/로그인.png"]
      },
      {
        description: "물품 등록",
        images: ["/상품등록.png",] 
      },
      {
        description: "마이페이지",
        images: ["/마이페이지삭제.png","/마이페이지계시글.png"]
      },
      {
        description: "게시글 작성/수정/삭제",
        images: ["/게시글.png","/게시글1.png","/게시글2.png","/게시글3.png","/게시글4.png"]
      },
      {
        description: "실시간 1:1 채팅 시스템 (WebSocket)",
        images: ["/채팅1.png", "/채팅4.png", "/채팅3.png", "/채팅2.png"]
      },
      {
        description: "거래내역",
        images: ["/거래내역.png"] 
      },
      {
        description: "찜목록",
        images: ["/찜.png"]
      },
      {
        description: "고객센터 & 1:1문",
        images: ["/고객1.png","/고객2.png","/고객3.png","/고객4.png","/고객5.png","/고객6.png"]
      },
      {
        description: "📙관리자",
        images: ["/관리자.png"] 
      },
      {
        description: "관리자 기능",
        images: ["/관리자1.png","/관리자2.png","/관리자3.png","/관리자4.png"] 
      }
    ]
  }
};

// 이미지 모달 컴포넌트
function ImageModal({ src, alt, onClose }) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="image-modal-backdrop" onClick={onClose}>
      <div className="image-modal-content" onClick={e => e.stopPropagation()}>
        <img src={src} alt={alt} className="image-modal-img" />
        <button className="image-modal-close" onClick={onClose}>닫기 ✕</button>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  // 이미지 모달 상태
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const selectedProject = projectDetailsData[id];
    if (selectedProject) {
      setProject(selectedProject);
    } else {
      navigate('/projects');
    }
  }, [id, navigate]);

  // 이미지 클릭 시 모달 오픈
  const handleImageClick = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  if (!project) {
    return <div className="project-detail-loading">프로젝트 정보를 불러오는 중입니다...</div>;
  }
  if (id === '3') {
    return (
      <div className="project-detail-container notion-style">
        <button className="project-detail-back-button" onClick={() => navigate(-1)}>← 뒤로 가기</button>
        <h1 className="project-detail-title">{project.title}</h1>
        <div className="section-block">
          <h2>⚙️ 프로젝트 개요</h2>
          <p><strong>프로젝트 명:</strong> {project.projectOverview.name}</p>
          <p><strong>개발 기간:</strong> {project.projectOverview.period}</p>
          <p><strong>개발 인원:</strong> {project.projectOverview.members}</p>
          <p>
            <strong>참여자:</strong>
            <ul>
              {project.teamMembers?.map((member, index) => (
                <li key={index}>
                  {member.name}
                </li>
              ))}
            </ul>
          </p>
          <p><strong>프로젝트 형태:</strong> {project.projectOverview.type}</p>
          <p>
            우리의 코드 : <strong>Git허브</strong> - <a href={project.githubLink} target="_blank" rel="noopener noreferrer">TalkMarket GitHub</a>
          </p>
          {project.deployedLink && project.deployedLink !== "#" && (
            <p>
              서비스 바로가기 : <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">TalkMarket 라이브 데모</a>
            </p>
          )}
        </div>

        <div className="section-block">
          <h2>⚡️ 프로젝트 구성 및 설계</h2>
          <h3 className="sub-heading">📙 Site Map</h3>
          {project.siteMapImage && (
            <img
              src={project.siteMapImage}
              alt="Site Map"
              className="project-image-large clickable-image"
              style={{ cursor: 'zoom-in' }}
              onClick={() => handleImageClick(project.siteMapImage)}
            />
          )}
          <h3 className="sub-heading">📙 Database ERD</h3>
          {project.erdImage && (
            <img
              src={project.erdImage}
              alt="Database ERD"
              className="project-image-large clickable-image"
              style={{ cursor: 'zoom-in' }}
              onClick={() => handleImageClick(project.erdImage)}
            />
          )}
          <h3 className="sub-heading">📙 사용 기술</h3>
          <div className="technologies-list">
            {project.technologiesUsed?.frontend?.length > 0 && (
              <p><strong>프론트엔드:</strong> {project.technologiesUsed.frontend.join(", ")}</p>
            )}
            {project.technologiesUsed?.backend?.length > 0 && (
              <p><strong>백엔드:</strong> {project.technologiesUsed.backend.join(", ")}</p>
            )}
            {project.technologiesUsed?.database?.length > 0 && (
              <p><strong>데이터베이스:</strong> {project.technologiesUsed.database.join(", ")}</p>
            )}
            {project.technologiesUsed?.deployment?.length > 0 && (
              <p><strong>배포:</strong> {project.technologiesUsed.deployment.join(", ")}</p>
            )}
            {project.technologiesUsed?.others?.length > 0 && (
              <p><strong>기타:</strong> {project.technologiesUsed.others.join(", ")}</p>
            )}
          </div>
        </div>

        <div className="section-block">
          <h2>⚡️ 프로젝트 주요 기능</h2>
          <ul className="project-detail-features feature-with-images">
            {project.features?.map((featureObj, index) => (
              <li key={index}>
                <p className="feature-description">{featureObj.description}</p> 
                {featureObj.images && featureObj.images.length > 0 && (
                  <div className="feature-images"> 
                    {featureObj.images.map((imgSrc, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={imgSrc}
                        alt={`${featureObj.description} 이미지 ${imgIdx + 1}`}
                        className="feature-image clickable-image"
                        style={{ maxWidth: '240px', maxHeight: '180px', margin: '8px', cursor: 'zoom-in' }}
                        onClick={() => handleImageClick(imgSrc)}
                      />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {modalImage && (
          <ImageModal src={modalImage} alt="프로젝트 상세 이미지" onClose={closeModal} />
        )}
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <button className="project-detail-back-button" onClick={() => navigate(-1)}>← 뒤로 가기</button>
      <h1 className="project-detail-title">{project.title}</h1>

      <div className="project-detail-images">
        {project.images && project.images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`${project.title} 이미지 ${index + 1}`}
            className="project-detail-image clickable-image"
            style={{ maxWidth: '320px', maxHeight: '240px', margin: '8px', cursor: 'zoom-in' }}
            onClick={() => handleImageClick(imgSrc)}
          />
        ))}
      </div>

      <p className="project-detail-summary">{project.summary}</p>

      <div className="project-detail-info-grid">
        <div className="info-item">
          <strong>기간:</strong> {project.period}
        </div>
        <div className="info-item">
          <strong>기여도:</strong> {project.role}
        </div>
        <div className="info-item">
          <strong>기술 스택:</strong> {project.stacks.join(", ")}
        </div>
      </div>

      <h2 className="project-detail-subtitle">주요 기능</h2>
      <ul className="project-detail-features">
        {project.features && project.features.map((feature, index) => (
          <li key={index}>
            {typeof feature === 'object' && feature !== null && 'description' in feature
              ? feature.description
              : feature}
          </li>
        ))}
      </ul>

      <div className="project-detail-links">
        {project.githubLink && project.githubLink !== "#" && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-button github">
            GitHub Repository
          </a>
        )}
        {project.deployedLink && project.deployedLink !== "#" && (
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="project-link-button deployed">
            서비스 바로가기
          </a>
        )}
      </div>
      {modalImage && (
        <ImageModal src={modalImage} alt="프로젝트 상세 이미지" onClose={closeModal} />
      )}
    </div>
  );
}

export default ProjectDetail;