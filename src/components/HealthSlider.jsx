import React, { useState } from "react";

export const HealthSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const slides = [
    {
      title: "Frequency of Mediation Errors",
      content:
        "Studies have suggested that medication errors occur in around 3-10% of pediatric inpatient medication orders.",
    },
    {
      title: "Types of Errors",
      content:
        "Within these instances, around 20-30% are related to dosing errors, including incorrect dosage calculations or administration mistakes.",
    },
    {
      title: "Age-Related Errors",
      content:
        "Younger children, especially infants and toddlers, are more susceptible to dosing errors due to their variability in weight, metabolism, and the need for precise dosing.",
    },
    {
      title: "Error Severity:",
      content:
        "The severity of medication errors varies. Some errors might cause no harm or minimal harm, while others could lead to severe consequences or require medical intervention.",
    },
    {
      title: "Common Medications Involved",
      content:
        "Certain medications, like antibiotics, pain relievers, and medications with narrow therapeutic indices (where small dose variations can cause significant effects), are more commonly associated with dosing errors.",
    },
  ];

  const currentSlideContent = slides[currentSlide];

  return (
    <div className="ch-slider">
      <h2>{currentSlideContent.title}</h2>
      <p>{currentSlideContent.content}</p>

      <div className="ch-slider-btns">
        <button onClick={handlePrevSlide}>Previous</button>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
};
