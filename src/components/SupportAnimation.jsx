import Lottie from "lottie-react";
import animationData from "../assets/support.json";
import { useRef } from "react";

export const SupportAnimation = () => {
  const lottieRef = useRef();
  return (
    <div>
      <Lottie loop={false} animationData={animationData} />
    </div>
  );
};
