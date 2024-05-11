import React from "react";
import Lottie from "lottie-react";
import nF from "../../assets/notfound404.json";

export const NotFoundAnimation = () => {
  return (
    <div>
      <Lottie loop={true} animationData={nF} />
    </div>
  );
};
