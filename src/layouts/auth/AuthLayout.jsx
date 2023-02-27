import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import "swiper/css/pagination";
import './AuthLayout.css';

export const AuthLayout = ({ children, title }) => {
  return (
    <div className="AuthLayout">
      <div className="AuthLayout__left">
        <div className="AuthLayout__form">
          <h1 className='AuthLayout__title' >{ title }</h1>

          {children}

        </div>
      </div>

      <div className="AuthLayout__right">
        {/* <div className="swiper">
          <div className="swiper swiperLoop">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <small>#Fitness</small>
                <h4>DEBERIAS SER ADICTO</h4>
                <h3>A SUPERARTE</h3>
                <h2>A TÍ MISMO</h2>
              </div>
              <div className="swiper-slide">
                <small>#Fitness</small>
                <h4>Si entrenas Duro,</h4>
                <h3>No solo serás duro,</h3>
                <h2>Serás duro de Superar</h2>
              </div>
            </div>
          </div>
        </div> */}
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper AuthLayout__swiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
