import React from "react";

function Header(props) {
  return (
    <header id="headerType" className="props.fonts">
      <div className="header__inner">
        <div className="header__logo">
          <a href="#top">
            <img src="assets/img/logo.jpg" alt="웹사이트 로고" />
          </a>
        </div>
        <nav className="header__menu">
          <ul>
            <li>
              <a href="#imageType">해외여행</a>
            </li>
            <li>
              <a href="#imgTextType">국내여행</a>
            </li>
            <li>
              <a href="#cardType">항공/숙박</a>
            </li>
            <li>
              <a href="#bannerType">투어/입장권</a>
            </li>
            <li>
              <a href="#textType">허니문/골프</a>
            </li>
          </ul>
        </nav>
        <div className="header__member">
          <a href="/">로그인</a>
        </div>
        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
