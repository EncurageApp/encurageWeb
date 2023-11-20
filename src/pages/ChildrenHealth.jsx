import React from "react";
import SilverLines from "../imgs/dadtwokids.jpg";
// import { HealthSlider } from "../components/HealthSlider";
import { Parallax } from "react-parallax";
import { ChildrenStats } from "../components/ChildrenStats";
import { GooglePlayBtn } from "../components/GooglePlayBtn";
import { AppStoreBtn } from "../components/AppStoreBtn";

export const ChildrenHealth = () => {
  return (
    <main className="health-page">
      <section className="ch-hero">
        <Parallax strength={500} bgImage={SilverLines}>
          <div className="ch-intro">
            <div className="ch-intro-text">
              <h2>Navigating the Numbers,</h2>
              <p>
                Exploring Children's Medication Errors and How We Are Preventing
                Them!
              </p>
            </div>
          </div>
        </Parallax>
      </section>

      <section className="ch-stats-container">
        <h2>#'s At A Glance</h2>
        <div className="ch-card-wrapper">
          <div className="ch-stats-card">
            <div className="ch-card-icon"></div>
            <div className="ch-card-content">
              <ChildrenStats animateNumber={300000} />
              <p>
                Incidents happen every year, according to the Poison Controls
                Centers in the United States. 90% of these medication errors
                occur at Home
              </p>
            </div>
          </div>
          <div className="ch-stats-card">
            <div className="ch-card-icon"></div>
            <div className="ch-card-content">
              <ChildrenStats animateNumber={4000} />
              <p>
                Incidents have lead to children omitted to the ICU, with some
                cases becoming fatal
              </p>
            </div>
          </div>
          <div className="ch-stats-card">
            <div className="ch-card-icon"></div>
            <div className="ch-card-content">
              <ChildrenStats animateNumber={20000} />
              <p>
                Parents who have taken the proactive step of downloading
                Encurage app
              </p>
              <div className="ch-download-btn-container">
                <GooglePlayBtn />
                <AppStoreBtn />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ch-reason-container"></section>

      {/* <section className="ch-slider-container">
        <Parallax strength={500} bgImage={SilverLines}>
          <HealthSlider />
        </Parallax>
      </section> */}
    </main>
  );
};
