import React from "react";
import "./Journey.css";

const journeyData = [
  {
    year: "2024.09",
    title: "개발 공부 시작",
    description: "Python 기초를 학습하며 개발자로의 첫걸음을 내딛었습니다.",
  },
  {
    year: "2024.12",
    title: "다른 언어 도전",
    description: "Java 기초를 학습하며 나에게 어울리는 방향을 다시 찾고있습니다.",
  },
  {
    year: "2025.01",
    title: "1차 팀 프로젝트 경험",
    description: "Java, Eclipse, Oracle, SceneBuilder를 배우며 첫 번째 프로젝트를 완성했어요. 기초부터 차근차근 배워가는 과정이 즐거웠습니다.",
  },
  {
    year: "2025.03",
    title: "2차 팀 프로젝트 경험",
    description: "Spring Framework를 학습하며 API 연동과 예약 시스템의 중복 방지 로직을 구현했어요. 백엔드 개발의 재미를 느꼈습니다.",
  },
    {
    year: "2025.05",
    title: "3차 팀 프로젝트 경험",
    description: "실시간 채팅과 위치 기반 물품 검색이 가능한 중고거래 웹 플랫폼을 만들었슴니다.",
  },
  {
    year: "2024.06~",
    title: "꾸준한 성장",
    description: "기술 블로그, 오픈소스 기여 등 개발자로서 계속 성장 중입니다.",
  },
];

function Journey() {
  return (
    <section className="journey-section">
      <h2>나의 개발자 여정</h2>
      <ul className="journey-timeline">
        {journeyData.map((step, idx) => (
          <li key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{step.year}</span>
              <strong className="timeline-title">{step.title}</strong>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Journey;