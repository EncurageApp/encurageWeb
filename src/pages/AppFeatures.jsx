import React from "react";
import { AnimateText } from "../components/AnimateText";
import { AppSlider } from "../components/AppSlider";
import { AppFeatureAnimation } from "../components/animations/AppFeatureAnimation";

export const AppFeatures = () => {
  return (
    <main className="appFeatures-page">
      <section className="af-hero">
        <AnimateText>
          <div className="af-intro-text">
            <h2>Discover the Power of Encurage</h2>
            <p>
              Encurage offers a rich array of features designed to simplify and
              streamline medication management for your child.
            </p>
          </div>
        </AnimateText>
      </section>

      <section className="af-info">
        <div>
          <h2>
            Unlock the Full Potential: Explore the Boundless Capabilities of
            Encurage
          </h2>
          <p>
            Begin an exploration of Encurage's versatile features, designed for
            seamless medication management, synchronized caregiver support, and
            expert guidance. Dive into a world of possibilities for your child's
            health journey.
          </p>
        </div>
        <AppFeatureAnimation />
      </section>

      <section className="as-needed-wizard">
        <div>
          <p>
            Specifically designed for as-needed (PRN) medications, our unique
            schedule builder generates a dynamic medication schedule with
            enhanced editing capabilities, that updates itself automatically in
            alignment with your child’s needs, while keeping safe time gaps.
            <br />
            All done with a few taps. No reminder setting, no updating, no
            calculating.
          </p>
          <AppSlider>
            <p>First</p>
            <p>second</p>
          </AppSlider>
        </div>
      </section>
    </main>
  );
};

// 6 icons ideas   MultipleCareGivers
// icon component carousel
