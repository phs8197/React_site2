import React from "react";

function Text(props) {
  return (
    <section
      id="textType"
      className={`text__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <div className={`text__container ${props.attr[2]}`}>
        <div className="text__text">
          <span className="mb70">HANA TOUR</span>
          <h2 className="mb40">여행 가실래요?</h2>
          <p className="mb70">
            여행이 일상화된 요즘 시대,
            <br />
            포기했던 여행을 다시 꿈꾸고,
            <br />
            당신의 세계가 넓어질 수 있도록
            <br />
            새로운 하나투어가 함께 하겠습니다.
          </p>
        </div>
        <div className="text__innner">
          <div className="text t2">
            <h3 className="text__title">여행을 만듭니다.</h3>
            <p className="text__desc">
              익숙하지만 색다른 이야기를 모든 이들의
              <br /> 여행의 꿈을 실현해드립니다.
            </p>
            <a className="text_btn" href="/">
              더보기
            </a>
          </div>
          <div className="text t3">
            <h3 className="text__title">문화를 만듭니다.</h3>
            <p className="text__desc">
              여행을 넘어, 즐기고, 먹고 머무는 곳까지
              <br />더 큰 행복을 위해 우리는 문화를 만듭니다.
            </p>
            <a className="text_btn" href="/">
              더보기
            </a>
          </div>
          <div className="text t5">
            <h3 className="text__title">행복을 만듭니다.</h3>
            <p className="text__desc">
              고객에게 여행을 통한 행복을 선사하고,
              <br />
              고객의 행복을 느끼며,
              <br />
              또다른 행복을 만듭니다.
            </p>
            <a className="text_btn" href="/">
              더보기
            </a>
          </div>
          <div className="text t6">
            <h3 className="text__title">고객을 중심으로</h3>
            <p className="text__desc">
              고객을 중심으로 여행의 시작부터
              <br />
              끝까지 모든 것을 함께 할 수 있도록
              <br />
              하나투어가 함께 하겠습니다.
            </p>
            <a className="text_btn" href="/">
              더보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Text;
