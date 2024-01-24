import React from "react";
import Lottie from "lottie-react";
import AppAnimation2 from "../../assets/appFeature2.json";

export const AppFeatureAnimation2 = () => {
  return (
    <div className="app-animation2">
      <Lottie loop={true} animationData={AppAnimation2} />
    </div>
  );
};
