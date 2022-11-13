import React from "react";

function ImgText(props) {
  return (
    <section
      id="ImgTextType"
      className={`imgText__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>
        {" "}
        하나투어 <em>이용후기</em>
      </h2>
      <p>하나투어 고객님들의 리얼 후기입니다!</p>
      <div className={`imgText__inner ${props.attr[2]}`}>
        <article className="imgText">
          <div className="imgText__body">
            <p>
              아름다운 장소와 좋으신 분들을 만나 뜻깊은 추억을 쌓고 왔습니다.
              아레오파고스 언덕에서 일행중 여권을 분실하는 안타까운 일이
              있었지만. 역시~ 참좋은 여행사는 다릅니다. 어떻게 해외에서
              3시간만에 여권발급을 할수가 있는 거지요? 기적같이 만들어서 공항에
              오는걸 보고 다시 한번 참좋은 여행사에 별다섯개 추가 10개를 드리고
              싶습니다.
            </p>
          </div>
          <div className="imgText__info">
            <div className="info__column1">
              <img src="../assets/img/492.svg" alt="" height="60px" />
            </div>
            <div className="info__column2">
              <div className="info__row1">
                <h5>정가을</h5>
                <p>친구 여행객</p>
              </div>
              <div className="info__row2">
                <img src="../assets/img/504.svg" alt="" height="13px" />
              </div>
            </div>
          </div>
          <button className="imgText__btn">자세히 보기</button>
        </article>
        <article className="imgText">
          <div className="imgText__body">
            <p>
              짧은 마지막날을 보내고 안타고싶었던 비행기를 타고 결국 다시 한국에
              있네요 ㅎ 다리 다쳤을 때 걱정해주시고 파스도 주시고 걸어가며
              도란도란 이야기도 나눠주시고 능숙하게 이끌어주셨던 김태희
              가이드님! 덕분에 정말 행복하고 잊지 못할 스위스 여행이었습니다.
              다음에 또 함께했으면 좋겠습니다~
            </p>
          </div>
          <div className="imgText__info">
            <div className="info__column1">
              <img src="../assets/img/493.svg" alt="" height="60px" />
            </div>
            <div className="info__column2">
              <div className="info__row1">
                <h5>박현수</h5>
                <p>가족 여행객</p>
              </div>
              <div className="info__row2">
                <img src="../assets/img/504.svg" alt="" height="13px" />
              </div>
            </div>
          </div>
          <button className="imgText__btn">자세히 보기</button>
        </article>
        <article className="imgText">
          <div className="imgText__body">
            <p>
              오랜만에 느껴보는 자유였습니다. 태양의 나라 ㆍ정열의 나라 스페인을
              진하게 느끼고 온 여행~ 정말 배운 것도 알게 된 것도 많은 유익한
              시간이었습니다~
            </p>
          </div>
          <div className="imgText__info">
            <div className="info__column1">
              <img src="../assets/img/494.svg" alt="" height="60px" />
            </div>
            <div className="info__column2">
              <div className="info__row1">
                <h5>이병건</h5>
                <p>홀로 여행객</p>
              </div>
              <div className="info__row2">
                <img src="../assets/img/504.svg" alt="" height="13px" />
              </div>
            </div>
          </div>
          <button className="imgText__btn">자세히 보기</button>
        </article>
      </div>
    </section>
  );
}

export default ImgText;
