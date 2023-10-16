import React, { useState } from "react";
import Iphone from "../imgs/iphone.jpg";

export const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: Iphone,
      title: "Stay on Top of Medication Reminders",
      description: "Never miss a dose with our intuitive reminder system.",
      buttonText: "Explore Reminders",
    },
    {
      title: "Slide 2",
      description: "This is the second slide",
      buttonText: "Explore",
    },
    {
      title: "Slide 3",
      description: "This is the second slide",
      buttonText: "Explore",
    },
    // Add more slide data as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="image-slider">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <div className="slide-info">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button>{slide.buttonText}</button>
            </div>
          </div>
        ))}
        <div className="prev-arrow" onClick={prevSlide}>
          &#9664;
        </div>
        <div className="next-arrow" onClick={nextSlide}>
          &#9654;
        </div>
      </div>
    </div>
  );
};
