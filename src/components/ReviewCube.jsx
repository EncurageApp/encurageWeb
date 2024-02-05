import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCube, Pagination, Autoplay } from "swiper/modules";

export const ReviewCube = () => {
  return (
    <div className="review-slider-container">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="review-cube"
      >
        <SwiperSlide>
          <div>
            <div className="review-card">
              <div>
                <span className="review-star"></span>
                <span className="review-star"></span>
                <span className="review-star"></span>
                <span className="review-star"></span>
                <span className="review-star"></span>
              </div>
              <blockquote>
                Takes away the added stress of scheduling med dosage! Having a
                sick child is already exhausting, but adding the constant alarm
                setting and scheduling of medicines to help with fever and other
                symptoms makes it even more exhausting.
              </blockquote>
              <cite>&mdash; Anesmon</cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="review-card">
              <div>
                <span className="review-star"></span>
                <span className="review-star"></span>
                <span className="review-star"></span>
                <span className="review-star"></span>
                <span className="review-star"></span>
              </div>
              <blockquote>
                This app has helped our family SO MUCH. Thank you for making
                something to help simplify a stressful time for our family. I
                like the apps layout and being able to track my children’s
                medicines and when they took them. It’s very functional and easy
                to use. I’m thankful for the notifications that give me a heads
                up that it’s time for my child’s next dose of medicine. Great
                work you guys!
              </blockquote>
              <cite>&mdash; Andalgia</cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="review-card">
              <div>
                <span className="review-star"></span>
                <span className="review-star"></span>
                <span className="review-star"></span>
                <span className="review-star"></span>
                <span className="review-star"></span>
              </div>
              <blockquote>
                Takes away the added stress of scheduling med dosage! Having a
                sick child is already exhausting, but adding the constant alarm
                setting and scheduling of medicines to help with fever and other
                symptoms makes it even more exhausting.
              </blockquote>
              <cite>&mdash; Adrianna Embry</cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="review-card">
              <div>
                <span className="review-star"></span>
                <span className="review-star"></span>
                <span className="review-star"></span>
                <span className="review-star"></span>
                <span className="review-star"></span>
              </div>
              <blockquote>
                Takes away the added stress of scheduling med dosage! Having a
                sick child is already exhausting, but adding the constant alarm
                setting and scheduling of medicines to help with fever and other
                symptoms makes it even more exhausting.
              </blockquote>
              <cite>&mdash; Adrianna Embry</cite>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
