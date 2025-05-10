import React from "react";
import Lottie from "lottie-react";
import OurStoryAnimation from "../../assets/OurStory.json";

export const OurStoryAnimation = () => {
  return (
    <div className="OurStory-animation">
      <Lottie loop={true} animationData={OurStoryAnimation} />
    </div>
  );
};
