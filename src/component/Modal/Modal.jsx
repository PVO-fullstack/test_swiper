import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Iframe } from "../Iframe/Iframe";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const slides = [
  "slide1",
  "slide2",
  "slide3",
  "slide4",
  "slide5",
  "slide6",
  "slide7",
  "slide8",
];

export const Modal = ({ close, slide }) => {
  const [change, setChange] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [close]);

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  const handleSlideChange = () => {
    setChange(!change);
  };

  return (
    <div onClick={handleOverlayClick} className={styles.backdrop}>
      <div className={styles.conteiner}>
        <Swiper
          initialSlide={slide || 0}
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide}>
              <Iframe modal={true} id={slide} play={change} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
