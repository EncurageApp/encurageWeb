import React, { useState } from "react";

export const ImageSlider = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % children.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? children.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="image-slider">
      {children[currentImageIndex]}
      <div className="slider-btn-container">
        <button className="slider-btn" onClick={prevImage}>
          Previous
        </button>
        <button className="slider-btn" onClick={nextImage}>
          Next
        </button>
      </div>
    </div>
  );
};
