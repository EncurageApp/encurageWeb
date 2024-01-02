import React from "react";
import { AnimateText } from "../components/AnimateText";

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
      </section>
    </main>
  );
};

// 6 icons ideas   MultipleCareGivers
// icon component carousel
