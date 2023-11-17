import React from "react";
import AnimatedNumbers from "react-animated-numbers";

export const ChildrenStats = () => {
  return (
    <div className="stats">
      <AnimatedNumbers
        includeComma
        animateToNumber="200000"
        fontStyle={{ fontSize: "5rem", color: "#008080" }}
        configs={[{ mass: 1, tension: 220, friction: 100 }]}
      ></AnimatedNumbers>
      <div>%</div>
    </div>
  );
};
