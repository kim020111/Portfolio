import React, { useMemo, useState } from "react";
import "./Home.css";

// 코딩 경력 자동 카운트 함수
function getCodingDays(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  const diff = now - start;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const remainDays = days - (years * 365) - (months * 30);
  return { years, months, days, remainDays };
}

function Home() {
  // QR 확대용 상태
  const [qrOpen, setQrOpen] = useState(false);

  // 코딩 시작일 (YYYY-MM-DD로 입력)
  const codingStart = "2024-09-05";
  const coding = useMemo(() => getCodingDays(codingStart), [codingStart]);

  return (
    <div className="home-grid-layout">
      {/* 1. 프로필 카드 */}
      <div className="card profile-card">
        <img
          src="/profile.jpg"
          alt="프로필"
          className="profile-img"
          loading="lazy"
        />
        <h2>김대중</h2>
        <p>Backend Developer</p>
      </div>

      {/* 2. 취미 카드 */}
      <div className="card hobby-card">
        <h3>취미</h3>
        <img src="/첼시.png" alt="취미" className="hobby-img" />
        <img src="/바르셀로나.png" alt="취미" className="hobby-img" />
        <p>축구 & 풋살</p>
      </div>

      {/* 3. 코딩 시작일/경력 카드 */}
      <div className="card date-card">
        <h3>코딩 시작일</h3>
        <p>2024년 09월 05일</p>
        <h3>코딩 경력</h3>
        <p>
          {coding.years > 0 && `${coding.years}년 `}
          {coding.months > 0 && `${coding.months}개월 `}
          {coding.remainDays}일<br />
          (총 {coding.days}일)
        </p>
      </div>

      {/* 4. 연락처/QR 카드 */}
      <div className="card contact-card">
        <h3>Contact</h3>
        {/* QR 클릭 시 확대 */}
        <img
          src="/myqr.jpg"
          alt="카톡 QR"
          className="qr-img"
          onClick={() => setQrOpen(true)}
          style={{ cursor: "pointer" }}
          title="클릭하면 확대됩니다"
        />
        <p>
          Email: <a href="kimdaechung164@gmail.com">kimdaechung164@gmail.com</a><br/>
          GitHub: <a href="https://github.com/kim020111" target="_blank" rel="noopener noreferrer">GitHub</a><br/>
          Tel: 010-8398-9974
        </p>
      </div>

      {/* QR 확대 모달 */}
      {qrOpen && (
        <div className="qr-modal" onClick={() => setQrOpen(false)}>
          <div className="qr-modal-bg" />
          <img
            src="/myqr.jpg"
            alt="QR 확대"
            className="qr-img-large"
            onClick={e => e.stopPropagation()}
          />
          <button className="qr-modal-close" onClick={() => setQrOpen(false)}>닫기 ✕</button>
        </div>
      )}
    </div>
  );
}

export default Home;