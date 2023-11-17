import React from "react";
import SilverLines from "../imgs/colorsmoke2.jpg";
import { HealthSlider } from "../components/HealthSlider";
import { Parallax } from "react-parallax";
import { ChildrenStats } from "../components/ChildrenStats";

export const ChildrenHealth = () => {
  return (
    <main className="health-page">
      <section className="ch-hero">
        <Parallax strength={500} bgImage={SilverLines}>
          <div className="ch-intro">
            <div className="ch-intro-text">
              <h2>Navigating the Numbers,</h2>
              <p>Exploring Children's Medication Errors</p>
            </div>
          </div>
        </Parallax>
      </section>

      <section className="ch-stats-container">
        <ChildrenStats />
      </section>

      <section className="ch-slider-container">
        <HealthSlider />
      </section>
    </main>
  );
};
