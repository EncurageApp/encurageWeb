import React from "react";
import { TypeAnimation } from "react-type-animation";

export const HomeIntroAnimation = () => {
  return (
    <TypeAnimation
      cursor="false"
      className="home-intro-animation"
      sequence={[
        "Welcome!",
        3000,
        "To Your Personal Helper!",
        2000,
        "encurage!",
      ]}
      preRenderFirstString="true"
      style={{ fontFamily: "Quicksand", fontSize: "2rem" }}
    />
  );
};
