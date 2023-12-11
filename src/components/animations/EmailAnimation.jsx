import React from "react";
import Lottie from "lottie-react";
import emailAnimation from "../../assets/email.json";

export const EmailAnimation = () => {
  return (
    <div className="email-animation">
      <Lottie loop={true} animationData={emailAnimation} />
    </div>
  );
};
