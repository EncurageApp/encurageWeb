import React from "react";
import Lottie from "lottie-react";
import founderAnimation from "../../assets/founder.json";

export const FounderAnimation = () => {
  return (
    <div className="founder-animation">
      <Lottie loop={true} animationData={founderAnimation} />
    </div>
  );
};
