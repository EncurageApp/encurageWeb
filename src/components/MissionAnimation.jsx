import React from "react";
import Lottie from "lottie-react";
import missionAnimation from "../assets/mission.json";

export const MissionAnimation = () => {
  return (
    <div className="mission-animation">
      <Lottie loop={true} animationData={missionAnimation} />
    </div>
  );
};
