import React from "react";
import { AnimateText } from "../components/AnimateText";
import { AppFeatureAnimation } from "../components/animations/AppFeatureAnimation";

//images
import TH1 from "../imgs/appFeatureScreens/trackingHub/TH1.png";
import TH2 from "../imgs/appFeatureScreens/trackingHub/TH2.png";
import TH3 from "../imgs/appFeatureScreens/trackingHub/TH3.png";
import TH4 from "../imgs/appFeatureScreens/trackingHub/TH4.png";
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

      <section className="features-container">
        <div className="feature-info">
          <p>
            <span>Discover</span> the features of Encurage, designed to simplify
            and enhance the way you track and manage your child's medications,
            health data, and daily activities.
          </p>
        </div>
        <div className="feature-card-wrapper">
          <div className="feature-card fc-1">
            <h3>Tracking Hub</h3>
            <p>
              Track and log everything related to your child’s health, from
              occasional bugs to ongoing conditions. Detailed trackers for
              symptoms, side effects, vitals, therapies, and growth.
            </p>
          </div>
          <div className="feature-card fc-2">
            <h3>Care Family</h3>
            <p>
              An essential tool for seamless care coordination. Everyone
              connected, updated, and ready at the tap of a button.
            </p>
          </div>
          <div className="feature-card fc-3">
            <h3>Everything on a Schedule (EOS)</h3>
            <p>
              Comprehensive medication tracker and reminder built for your
              child’s ever-changing health journey.
            </p>
          </div>
          <div className="feature-card fc-4">
            <h3>Daily Life</h3>
            <p>
              Complete baby tracker with easy tools for feeding, sleep, and
              diapers. Track your baby’s experience with introducing solids and
              your child’s potty training journey.
            </p>
          </div>
          <div className="feature-card fc-5">
            <h3>
              As-Needed Wizard <br />
              (ANW)
            </h3>
            <p>
              Designed for as-needed (PRN) medications, our schedule builder
              generates a dynamic medication schedule that updates
              automatically, all with a few taps. No reminders, no updates, no
              calculations.
            </p>
          </div>

          <div className="feature-card fc-6">
            <h3>Journal</h3>
            <p>
              Follow and monitor your child’s experience with medications and
              treatments. Guided Journal Stories provide insights into sleep,
              appetite, energy, focus, mood, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="tracking-hub">
        <div>
          <div className="tracking-info">
            <h3>Tracking Hub</h3>
            <p>
              Track and log everything related to your child’s health, whether
              it’s an occasional bug or an ongoing condition requiring daily
              monitoring.
              <br />
              Symptoms, side effects, vitals, therapies, and growth categories
              include detailed and guided trackers, covering important
              information for you and your child’s pediatrician
            </p>
          </div>
          <AppCarousel>
            <img src={TH1} alt="tracking hub screen" width={225} />
            <img src={TH2} alt="tracking hub screen" width={225} />
            <img src={TH3} alt="tracking hub screen" width={225} />
            <img src={TH4} alt="tracking hub screen" width={225} />
          </AppCarousel>
        </div>
      </section>

      <section className="feature-divider"></section>

      <section className="as-needed-wizard">
        <div>
          <div className="anw-info">
            <h3>As-Needed Wizard</h3>
            <p>
              Specifically designed for as-needed (PRN) medications, our unique
              schedule builder generates a dynamic medication schedule with
              enhanced editing capabilities, that updates itself automatically
              in alignment with your child’s needs, while keeping safe time
              gaps.
              <br />
              All done with a few taps. No reminder setting, no updating, no
              calculating.
            </p>
          </div>
          <AppCarousel>
            <img src={TH1} alt="tracking hub screen" width={225} />
            <img src={TH2} alt="tracking hub screen" width={225} />
            <img src={TH3} alt="tracking hub screen" width={225} />
            <img src={TH4} alt="tracking hub screen" width={225} />
          </AppCarousel>
        </div>
      </section>
      <section className="feature-divider"></section>
    </main>
  );
};

// 6 icons ideas   MultipleCareGivers
// icon component carousel
