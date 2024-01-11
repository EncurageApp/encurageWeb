import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export const AppCarousel = ({ children }) => {
  return (
    <div className="swiper-container">
      <Swiper
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
