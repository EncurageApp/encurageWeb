import React from "react";
import { AnimateText } from "../components/AnimateText";
import { AppFeatureAnimation } from "../components/animations/AppFeatureAnimation";

//images
import TH1 from "../imgs/appFeatureScreens/sliderOne/TH1.png";
import TH2 from "../imgs/appFeatureScreens/sliderOne/TH2.png";
import TH3 from "../imgs/appFeatureScreens/sliderOne/TH3.png";
import TH4 from "../imgs/appFeatureScreens/sliderOne/TH4.png";
import { AppCarousel } from "../components/AppCarousel";

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

      <section className="tracking-hub">
        <h1>Tracking Hub</h1>
        <div>
          <p>
            Track and log everything related to your child’s health, whether
            it’s an occasional bug or an ongoing condition requiring daily
            monitoring.
            <br />
            Symptoms, side effects, vitals, therapies, and growth categories
            include detailed and guided trackers, covering important information
            for you and your child’s pediatrician
          </p>
        </div>
        <AppCarousel>
          <div>
            <img src={TH1} alt="tracking hub screen" width={225} />
          </div>
          <div>
            <img src={TH2} alt="tracking hub screen" width={225} />
          </div>
          <div>
            <img src={TH3} alt="tracking hub screen" width={225} />
          </div>
          <div>
            <img src={TH4} alt="tracking hub screen" width={225} />
          </div>
        </AppCarousel>
      </section>
    </main>
  );
};

// 6 icons ideas   MultipleCareGivers
// icon component carousel
