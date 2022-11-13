import React from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Navigation } from "swiper";

function Slider() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ height: "800px" }}
      >
        <SwiperSlide
          style={{
            backgroundImage: "url(../assets/img/31.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="slide__txt">
            <span>699,000원~</span>
            <h1>샌프란시스코 6박 7일</h1>
            <p>#온천여행 #미국 #6박 7일</p>
            <button>자세히 보기</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(../assets/img/32.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="slide__txt">
            <span>1,499,000원~</span>
            <h1>캐나다 동부 7박 9일</h1>
            <p>#온천여행 #미국 #6박 7일</p>
            <button>자세히 보기</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(../assets/img/33.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="slide__txt">
            <span>1,999,000원~</span>
            <h1>호주/뉴질랜드 6박 7일</h1>
            <p>#온천여행 #미국 #6박 7일</p>
            <button>자세히 보기</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(../assets/img/34.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="slide__txt">
            <span>2,199,000원~</span>
            <h1>동유럽 9박 10일</h1>
            <p>#온천여행 #미국 #6박 7일</p>
            <button>자세히 보기</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
