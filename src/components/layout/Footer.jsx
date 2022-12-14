import React from "react";

function Footer(props) {
  return (
    <footer
      id="footerType"
      className={`footer__wrap ${props.attr[0]} ${props.attr[1]} ${props.attr[3]}`}
    >
      <h2 className="blind">푸터 영역</h2>
      <div className={`footer__inner ${props.attr[2]}`}>
        <div className="footer__menu">
          <div>
            <h3>해외여행</h3>
            <ul>
              <li>
                <a href="/">동남아/대만/서남아</a>
              </li>
              <li>
                <a href="/">괌/사이판/호주</a>
              </li>
              <li>
                <a href="/">유럽/아프리카</a>
              </li>
              <li>
                <a href="/">미주/중남미/하와이</a>
              </li>
              <li>
                <a href="/">일본/중국/홍콩</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>국내여행</h3>
            <ul>
              <li>
                <a href="/">제주/국내여행</a>
              </li>
              <li>
                <a href="/">제주도 렌터카</a>
              </li>
              <li>
                <a href="/">단독 여행문의</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>항공/숙박</h3>
            <ul>
              <li>
                <a href="/">항공권</a>
              </li>
              <li>
                <a href="/">숙박</a>
              </li>
              <li>
                <a href="/">최저가 검색</a>
              </li>
              <li>
                <a href="/">최저 특가</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>투어/입장권</h3>
            <ul>
              <li>
                <a href="/">국내</a>
              </li>
              <li>
                <a href="/">동남아/중국/일본</a>
              </li>
              <li>
                <a href="/">유럽/중동</a>
              </li>
              <li>
                <a href="/">미주</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>허니문/골프</h3>
            <ul>
              <li>
                <a href="/">허니문</a>
              </li>
              <li>
                <a href="/">골프</a>
              </li>
              <li>
                <a href="/">단독 여행문의</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right"></div>
      </div>
    </footer>
  );
}

export default Footer;
