import React from "react";

function Card(props) {
  return (
    <section
      id="cardType"
      className={`card__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>
        {" "}
        <em>HOT DEAL</em> 특가
      </h2>
      <p>놀라운 가격의 선착순 초특가 딜 놓치지 마세요!</p>
      <div className={`card__inner ${props.attr[2]}`}>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/15.jpg" alt="웹표준 사이트 만들기" />
          </figure>
          <div className="card__body">
            <h3 className="tit">동유럽 8박9일 특가</h3>
            <p className="desc">1,299,000~</p>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/12.jpg" alt="웹표준 사이트 만들기" />
          </figure>
          <div className="card__body">
            <h3 className="tit">스위스 5박7일 특가</h3>
            <p className="desc">899,000~</p>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/22.jpg" alt="웹표준 사이트 만들기" />
          </figure>
          <div className="card__body">
            <h3 className="tit">뉴욕 남부 8박9일 특가</h3>
            <p className="desc">499,000~</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Card;
