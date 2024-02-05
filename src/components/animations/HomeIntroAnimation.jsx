import React from "react";
import { TypeAnimation } from "react-type-animation";

export const HomeIntroAnimation = () => {
  return (
    <TypeAnimation
      className="home-intro-animation"
      sequence={[
        "Welcome!",
        3000,
        "Here We Are Empowering Parents With Peace Of Mind",
        2000,
        "Simplifying Children's Health One Day At A Time",
        2000,
        "The Future Of Medical Companions",
        2000,
        "Encurage!",
      ]}
      preRenderFirstString="true"
    />
  );
};
