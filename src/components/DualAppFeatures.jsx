import React from "react";

export const DualAppFeature = ({ images, width, height }) => {
  return (
    <div className="dualApp-container">
      <div className="dualApp-image-wrapper">
        {images.map((img, index) => (
          <img
            key={index}
            className={`dualApp-img${index + 1}`}
            src={img}
            alt={`App screen example ${index + 1}`}
            style={{ width, height }}
          />
        ))}
      </div>
    </div>
  );
};
