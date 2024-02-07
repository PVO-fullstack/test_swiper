// import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Iframe } from "../Iframe/Iframe";
import React from "react";
import { slides } from "../Modal/Modal";

export const VideoSwiper = ({ open }) => {
  return (
    <Swiper modules={[Navigation]} slidesPerView={4} navigation>
      {slides.map((slide, i) => (
        <SwiperSlide key={slide}>
          <Iframe id={i} open={open} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
