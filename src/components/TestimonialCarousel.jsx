import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TestimonialCarousel = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
  };
  return (
    <div className="carousel-testimonial-container">
      <Slider {...sliderSettings}>
        <div className="testimonial-wrapper">
          <div className="testimonial">
            <blockquote>
              Being a first-time mom, I was overwhelmed with the responsibility
              of managing my baby's medications. This app has been a godsend,
              making it a breeze to keep track of feeding times, diaper changes,
              and medicine doses. The simple design and baby-friendly features
              make it an essential tool for any parent navigating the challenges
              of a newborn's health.
            </blockquote>
            <div></div>
            <p>Rebakah Linville &mdash; Louisville, KY</p>
          </div>
        </div>
        <div className="testimonial-wrapper">
          <div className="testimonial">
            <blockquote>
              As a parent of a toddler, it's a constant challenge to ensure they
              receive the right medicine at the right time. This app has made
              that task so much easier. The colorful and intuitive interface
              engages my child, turning medication time into a positive
              experience. I highly recommend this app to fellow parents dealing
              with the unique needs of little ones.
            </blockquote>
            <div></div>
            <p>Shulpa Ethington &mdash; Phoenix, AR</p>
          </div>
        </div>
        <div className="testimonial-wrapper">
          <div className="testimonial">
            <blockquote>
              With a fussy baby, remembering when to administer medication can
              be chaotic. This app has been a savior in our household, offering
              a straightforward solution to track our baby's doses and symptoms.
              The graphics and playful features engage our little one, making it
              a cooperative effort. I can't thank the developers enough for
              creating such a valuable tool for parents.
            </blockquote>
            <div></div>
            <p>Curtis Dickerson &mdash; Denver, CO</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
