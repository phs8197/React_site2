import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>
        {" "}
        이번주 판매 <em>베스트</em>
      </h2>
      <p>모두가 사랑하는 여행지, 지금 바로 즐기세요!</p>
      <div className={`image__inner ${props.attr[2]}`}>
        <article className="image">
          <img
            className="img img1"
            src="../assets/img/31.jpg"
            no-repeat
            center
            alt=""
          />
          <div className="img__text">
            <h4 className="image__title">샌프란시스코 10일</h4>
            <p className="image__desc">#온천여행 #미식여행</p>
            <h5 className="image__price">1,299,300원~</h5>
          </div>
        </article>
        <article className="image">
          <img
            className="img img1"
            src="../assets/img/32.jpg"
            no-repeat
            center
            alt=""
          />
          <div className="img__text">
            <h4 className="image__title">샌프란시스코 10일</h4>
            <p className="image__desc">#온천여행 #미식여행</p>
            <h5 className="image__price">1,299,300원~</h5>
          </div>
        </article>
        <article className="image">
          <img
            className="img img1"
            src="../assets/img/39.jpg"
            no-repeat
            center
            alt=""
          />
          <div className="img__text">
            <h4 className="image__title">샌프란시스코 10일</h4>
            <p className="image__desc">#온천여행 #미식여행</p>
            <h5 className="image__price">1,299,300원~</h5>
          </div>
        </article>
        <article className="image">
          <img
            className="img img1"
            src="../assets/img/40.jpg"
            no-repeat
            center
            alt=""
          />
          <div className="img__text">
            <h4 className="image__title">샌프란시스코 10일</h4>
            <p className="image__desc">#온천여행 #미식여행</p>
            <h5 className="image__price">1,299,300원~</h5>
          </div>
        </article>
        <article className="image">
          <img
            className="img img1"
            src="../assets/img/35.jpg"
            no-repeat
            center
            alt=""
          />
          <div className="img__text">
            <h4 className="image__title">샌프란시스코 10일</h4>
            <p className="image__desc">#온천여행 #미식여행</p>
            <h5 className="image__price">1,299,300원~</h5>
          </div>
        </article>
        <article className="image">
          <img
            className="img img1"
            src="../assets/img/36.jpg"
            no-repeat
            center
            alt=""
          />
          <div className="img__text">
            <h4 className="image__title">샌프란시스코 10일</h4>
            <p className="image__desc">#온천여행 #미식여행</p>
            <h5 className="image__price">1,299,300원~</h5>
          </div>
        </article>
        <article className="image">
          <img
            className="img img1"
            src="../assets/img/37.jpg"
            no-repeat
            center
            alt=""
          />
          <div className="img__text">
            <h4 className="image__title">샌프란시스코 10일</h4>
            <p className="image__desc">#온천여행 #미식여행</p>
            <h5 className="image__price">1,299,300원~</h5>
          </div>
        </article>
        <article className="image">
          <img
            className="img img1"
            src="../assets/img/38.jpg"
            no-repeat
            center
            alt=""
          />
          <div className="img__text">
            <h4 className="image__title">샌프란시스코 10일</h4>
            <p className="image__desc">#온천여행 #미식여행</p>
            <h5 className="image__price">1,299,300원~</h5>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Image;
