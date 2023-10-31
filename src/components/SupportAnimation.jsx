import Lottie from "lottie-react";
import animationData from "../assets/support.json";

export const SupportAnimation = () => {
  return (
    <div className="support-animation">
      <Lottie loop={false} animationData={animationData} />
    </div>
  );
};
