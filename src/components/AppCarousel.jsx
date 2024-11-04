import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const AppCarousel = ({ children }) => {
  return (
    <div className="swiper-container">
      <DeviceFrameset device="iPhone 8" color="black" zoom={0.65}>
        <Swiper
          modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          keyboard={{
            enabled: true,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            500: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 1,
            },
          }}
        >
          {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))}
        </Swiper>
      </DeviceFrameset>
    </div>
  );
};
