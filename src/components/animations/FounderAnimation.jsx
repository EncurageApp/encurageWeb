import React from "react";
import Lottie from "lottie-react";
import OurStoryAnimations from "../../assets/founder.json";

export const OurStoryAnimation = () => {
  return (
    <div className="OurStory-animation">
      <Lottie loop={true} animationData={OurStoryAnimations} />
    </div>
  );
};
