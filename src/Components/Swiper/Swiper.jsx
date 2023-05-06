import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import KavaStarogoLvovu from "../../static/img/kava_starogo_lvovu_logo.svg";
import KonservyMK from "../../static/img/MK-shproty.png";
import Lovare from "../../static/img/lovare-logo.png";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function TopPositions() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="swiper"
      >
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            alt="Top positions"
            id="Alokozay"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={KavaStarogoLvovu}
            alt="Кава Старого Львову"
            id="kavaStarogoLvovu"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={KonservyMK}
            alt="Консерви торгової марки МК, Польща"
            id="konservyMK"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lovare} alt="Чай Ловаре" id="chaiLovare" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt="Some random demo"
            id="Mayskiy"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
