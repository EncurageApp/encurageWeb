import React from "react";
import WashHands from "../imgs/kidwashinghand.jpg";
import { HealthSlider } from "../components/HealthSlilder";

export const ChildrenHealth = () => {
  return (
    <main className="health-page">
      <section className="ch-hero">
        <div>
          <img
            src={WashHands}
            alt="father and daughter washing hands in kitchen"
          />
        </div>
      </section>

      <section className="ch-slider-container">
        <HealthSlider />
      </section>
    </main>
  );
};
