import React from "react";
import Lottie from "lottie-react";
import AppAnimation from "../../assets/appFeature.json";

export const AppFeatureAnimation = () => {
  return (
    <div className="app-animation">
      <Lottie loop={true} animationData={AppAnimation} />
    </div>
  );
};
