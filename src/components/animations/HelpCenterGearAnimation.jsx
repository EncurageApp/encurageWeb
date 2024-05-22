import Lottie from "lottie-react";
import GearAnimation from "../../assets/helpCenterGears.json";

export const GearsAnimation = () => {
  return (
    <div className="gear-animation">
      <Lottie loop={true} animationData={GearAnimation} />
    </div>
  );
};
