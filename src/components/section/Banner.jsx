import React from "react";

function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">
          <em>하나투어</em> 유투브
        </h3>
        <p className="desc">
          지금 하나투어 유투브를 구독하고,
          <br />
          인스타로 인증하면 선착순으로 <em>5% 할인쿠폰</em>을 드립니다!
        </p>
        <button>구독하기</button>
      </div>
    </section>
  );
}

export default Banner;
