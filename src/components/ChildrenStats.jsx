import React from "react";
import AnimatedNumbers from "react-animated-numbers";

export const ChildrenStats = ({ animateNumber }) => {
  return (
    <div className="stats">
      <AnimatedNumbers
        includeComma
        animateToNumber={animateNumber}
        fontStyle={{ color: "white" }}
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers>
      <div>+</div>
    </div>
  );
};
