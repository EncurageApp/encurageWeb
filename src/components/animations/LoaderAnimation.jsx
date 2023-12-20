import React from "react";
import Lottie from "lottie-react";
import LoadAnimation from "../../assets/loader.json";

export const LoaderAnimation = () => {
  return (
    <div className="loader-container">
      <div className="loader-animation">
        <Lottie loop={true} animationData={LoadAnimation} />
      </div>
    </div>
  );
};
