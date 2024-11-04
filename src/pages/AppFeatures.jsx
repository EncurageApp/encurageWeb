/* EXPLORE PAGE */

import React, { useRef } from "react";

//components
import { AppCarousel } from "../components/AppCarousel";
import { GooglePlayBtn } from "../components/GooglePlayBtn";
import { AppStoreBtn } from "../components/AppStoreBtn";

//images
import ANW1 from "../imgs/appFeatureScreens/ANW/ANW1.png";
import ANW2 from "../imgs/appFeatureScreens/ANW/ANW2.png";
import ANW3 from "../imgs/appFeatureScreens/ANW/ANW3.png";
import ANW4 from "../imgs/appFeatureScreens/ANW/ANW4.png";

import EOAS1 from "../imgs/appFeatureScreens/EOAS/EOAS1.png";
import EOAS2 from "../imgs/appFeatureScreens/EOAS/EOAS2.png";
import EOAS3 from "../imgs/appFeatureScreens/EOAS/EOAS3.png";

import TH1 from "../imgs/appFeatureScreens/trackingHub/TH1.png";
import TH2 from "../imgs/appFeatureScreens/trackingHub/TH2.png";
import TH3 from "../imgs/appFeatureScreens/trackingHub/TH3.png";
import TH4 from "../imgs/appFeatureScreens/trackingHub/TH4.png";

import CF1 from "../imgs/appFeatureScreens/careFamily/CF1.png";

import J1 from "../imgs/appFeatureScreens/Journal/Journal1.png";
import J2 from "../imgs/appFeatureScreens/Journal/Journal2.png";
import J3 from "../imgs/appFeatureScreens/Journal/Journal3.png";
import J4 from "../imgs/appFeatureScreens/Journal/Journal4.png";

import DL1 from "../imgs/appFeatureScreens/DailyLife/DL1.png";
import DL2 from "../imgs/appFeatureScreens/DailyLife/DL2.png";
import DL3 from "../imgs/appFeatureScreens/DailyLife/DL3.png";
import DL4 from "../imgs/appFeatureScreens/DailyLife/DL4.png";

//icons
import Journal from "../imgs/icons/journal.png";
import Heart from "../imgs/icons/heartclipboard.png";
import Schedule from "../imgs/icons/schedule.png";
import People from "../imgs/icons/3people.png";
import HighFrequency from "../imgs/icons/highfrequency.png";
import DailyLife from "../imgs/icons/dailylife.png";

export const AppFeatures = () => {
  const asNeededRef = useRef(null);
  const scheduledRef = useRef(null);
  const trackingRef = useRef(null);
  const careGiverRef = useRef(null);
  const healthRef = useRef(null);
  const babyRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="appFeatures-page">
      <section className="af-hero-container">
        <div className="af-hero-container-img"></div>
        <div className="af-hero-container-text">
          <h2 data-aos="fade-in" data-aos-delay="'100%'">
            Just Add TLC
          </h2>

          <p data-aos="fade-in" data-aos-delay="2000">
            Every aspect of caring for your child at home has its own dedicated
            feature, built and designed for{" "}
            <span>the needs of your family</span>, following
            <span> extensive research</span>, medical vetting, and valuable{" "}
            <span>feedback from parents.</span>
          </p>
        </div>
      </section>

      <section className="features-container">
        <div className="feature-card-wrapper">
          <div
            onClick={() => scrollToSection(asNeededRef)}
            className="feature-card "
          >
            <div>
              <h3>As-Needed Medication Management</h3>
            </div>
            <img src={HighFrequency} width={60} alt="thermometer" />
          </div>
          <div
            onClick={() => scrollToSection(scheduledRef)}
            className="feature-card "
          >
            <h3>Scheduled Medication Management</h3>
            <img src={Schedule} width={60} alt="pill with arrow around it" />
          </div>
          <div
            onClick={() => scrollToSection(healthRef)}
            className="feature-card"
          >
            <h3>Comprehensive Health Tracking Tool</h3>
            <img src={Heart} width={60} alt="clipboard with heart" />
          </div>

          <div
            onClick={() => scrollToSection(careGiverRef)}
            className="feature-card "
          >
            <h3>Caregivers Management</h3>
            <img src={People} width={60} alt="3 caregiver" />
          </div>

          <div
            onClick={() => scrollToSection(healthRef)}
            className="feature-card "
          >
            <h3>Health Journal</h3>
            <img src={Journal} width={60} alt="journal pad" />
          </div>

          <div
            onClick={() => scrollToSection(babyRef)}
            className="feature-card "
          >
            <h3>Baby Tracker</h3>
            <img src={DailyLife} width={60} alt="pill with arrow around it" />
          </div>
        </div>
      </section>

      <section ref={asNeededRef} className="as-needed-wizard">
        <h2>What's Inside</h2>
        <div className="description-container">
          <div className="anw-info">
            <h3>As-Needed Wizard</h3>
            <p>
              Specifically designed for as-needed (PRN) medications, our unique
              schedule builder generates a dynamic medication schedule with
              enhanced editing capabilities, that updates itself automatically
              in alignment with your child’s needs, while keeping safe time
              gaps.
              <br />
              <br />
              All done with a few taps. No reminder setting, no updating, no
              calculating.
            </p>
          </div>
          <AppCarousel>
            <img src={ANW1} height={"100%"} alt="tracking hub screen" />
            <img src={ANW2} height={"100%"} alt="tracking hub screen" />
            <img src={ANW3} height={"100%"} alt="tracking hub screen" />
            <img src={ANW4} height={"100%"} alt="tracking hub screen" />
          </AppCarousel>
        </div>
      </section>

      <section className="eos">
        <div>
          <div ref={scheduledRef} className="eos-info">
            <h3>Everything on a Schedule</h3>
            <p>
              Built for your child’s ever changing health journey, a
              comprehensive, advanced medication tracker and reminder, with
              specific solutions for short-term and ongoing treatments of all
              types.
            </p>
          </div>
          <AppCarousel>
            <img
              src={EOAS1}
              height={720}
              alt="Everything on a schedule screen"
            />
            <img
              src={EOAS2}
              height={"100%"}
              alt="Everything on a schedule screen"
            />
            <img
              src={EOAS3}
              height={"100%"}
              alt="Everything on a schedule screen"
            />
          </AppCarousel>
        </div>
      </section>

      <section className="tracking-hub">
        <div>
          <div ref={trackingRef} className="tracking-info">
            <h3>Tracking Hub</h3>
            <p>
              Track and log everything related to your child’s health, whether
              it’s an occasional bug or an ongoing condition requiring daily
              monitoring.
              <br />
              <br />
              Symptoms, side effects, vitals, therapies, and growth categories
              include detailed and guided trackers, covering important
              information for you and your child’s pediatrician, and helping you
              navigate a sea of data easily and effectively.
            </p>
          </div>
          <AppCarousel>
            <img src={TH1} height={800} alt="Tracking Hub screen" />
            <img src={TH2} height={600} alt="Tracking Hub screen" />
            <img src={TH3} height={"100%"} alt="Tracking Hub screen" />
            <img src={TH4} height={700} alt="Tracking Hub screen" />
          </AppCarousel>
        </div>
      </section>

      <div className="ch-download-break">
        <p>Download and Explore</p>
        <GooglePlayBtn />
        <AppStoreBtn />
      </div>

      <section className="care-family">
        <div>
          <div ref={careGiverRef} className="cf-info">
            <h3>Caring Together</h3>
            <p>
              An essential tool for caring together, easily and efficiently.
              <br />
              <br />
              Parents. Partners. Grandparents. Relatives. Babysitters. Everyone
              is connected seamlessly, updated and ready to take over at the tap
              of a button.
            </p>
          </div>
          <AppCarousel>
            <img src={CF1} height={550} alt="Care Family screen" />
          </AppCarousel>
        </div>
      </section>

      <section className="journal">
        <div>
          <div ref={healthRef} className="j-info">
            <h3>Journal</h3>
            <p>
              Follow and monitor your child’s experience with medications and
              other treatments. How they react to a medication or treatment, the
              progress they are making, and their physical and emotional well
              being.
              <br />
              <br />
              Our guided Journal Stories address the unique aspects important to
              children's health and development.
              <br />
              Sleep, appetite, energy, focus, mood and many more categories
              provide you with valuable insights, and help in shaping the best
              treatment plan for your child.
            </p>
          </div>
          <AppCarousel>
            <img src={J1} width={225} alt="Journal app screen" />
            <img src={J2} width={230} alt="Journal app screen" />
            <img src={J3} width={150} alt="Journal app screen" />
            <img src={J4} width={250} alt="Journal app screen" />
          </AppCarousel>
        </div>
      </section>

      <section ref={babyRef} className="daily-life">
        <div>
          <div className="dl-info">
            <h3>Baby Life</h3>
            <p>
              A complete baby tracker with easy and efficient tracking tools for
              your baby’s feeding (including breastfeeding, bottle feeding and
              pumping), sleep and diapers.
              <br />
              Beyond the daily happenings, you can also track your baby’s
              experience with introducing solids, and your child’s potty
              training journey.
            </p>
          </div>
          <AppCarousel>
            <img src={DL1} width={230} alt="daily life app screen" />
            <img src={DL2} width={230} alt="daily life app screen" />
            <img src={DL3} width={180} alt="daily life app screen" />
            <img src={DL4} width={230} alt="daily life app screen" />
          </AppCarousel>
        </div>
      </section>
    </main>
  );
};
