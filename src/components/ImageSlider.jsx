import React, { useState } from "react";

export const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Stay on Top of Medication Reminders",
      description:
        "Never miss a dose with our intuitive reminder system. Set and receive medication reminders effortlessly. Try it now!",
      buttonText: "Explore Reminders",
    },
    {
      title: "Prescription Flexibility",
      description:
        "Effortlessly manage both short-term and ongoing prescriptions with our app. Simplify prescription management for your child's changing healthcare needs.",
      buttonText: "Learn More",
    },
    {
      title: "Efficient Dosage Tracking",
      description:
        "Effortlessly track and log each dosage with precision using our app. Our dosage tracking feature helps you stay organized, ensuring your child receives the right medicine at the right time",
      buttonText: "Explore Dosage Features",
    },
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
