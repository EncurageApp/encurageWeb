import React from "react";

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
  return (
    <main className="appFeatures-page">
      <section className="af-hero-container">
        <div className="af-hero-container-img"></div>
        <div className="af-hero-container-text">
          <h2 data-aos="fade-in" data-aos-delay="500">
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
          <div className="feature-card ">
            <div>
              <h3>As-Needed Medication Management</h3>
            </div>
            <img src={HighFrequency} width={60} alt="thermometer" />
          </div>
          <div className="feature-card ">
            <h3>Scheduled Medication Management</h3>
            <img src={Schedule} width={60} alt="pill with arrow around it" />
          </div>
          <div className="feature-card">
            <h3>Comprehensive Health Tracking Tool</h3>
            <img src={Heart} width={60} alt="clipboard with heart" />
          </div>

          <div className="feature-card ">
            <h3>Caregivers Management</h3>
            <img src={People} width={60} alt="3 caregiver" />
          </div>

          <div className="feature-card ">
            <h3>Health Journal</h3>
            <img src={Journal} width={60} alt="journal pad" />
          </div>

          <div className="feature-card ">
            <h3>Baby Tracker</h3>
            <img src={DailyLife} width={60} alt="pill with arrow around it" />
          </div>
        </div>
      </section>

      <section className="as-needed-wizard">
        <h2>What's Inside</h2>
        <div>
          <div className="anw-info">
            <h3>As-Needed Wizard</h3>
            <p>
              As-Needed OTC Fever Reducers, our unique schedule builder
              generates a medication schedule and updates it automatically, all
              the way through your child's episode and until they are doing
              well.
              <br />
              <br />
              All done with a few taps. No reminder setting, no updating, no
              calculating.
            </p>
          </div>
          <AppCarousel>
            <img src={ANW1} height={600} alt="tracking hub screen" />
            <img src={ANW2} height={600} alt="tracking hub screen" />
            <img src={ANW3} height={600} alt="tracking hub screen" />
            <img src={ANW4} height={600} alt="tracking hub screen" />
          </AppCarousel>
        </div>
      </section>

      <section className="eos">
        <div>
          <div className="eos-info">
            <h3>Everything on a Schedule</h3>
            <p>
              Short and Long-Term Prescriptions, for the occasional temporary
              treatments, and for ongoing conditions, advanced medicine
              reminders provide the tools you need for easy and efficient
              management, designed for children's medicine.
            </p>
          </div>
          <AppCarousel>
            <img
              src={EOAS1}
              height={820}
              alt="Everything on a schedule screen"
            />
            <img
              src={EOAS2}
              height={550}
              alt="Everything on a schedule screen"
            />
            <img
              src={EOAS3}
              height={550}
              alt="Everything on a schedule screen"
            />
          </AppCarousel>
        </div>
      </section>

      <section className="tracking-hub">
        <div>
          <div className="tracking-info">
            <h3>Tracking Hub</h3>
            <p>
              Symptom Tracker, detailed, children's symptoms oriented fever &
              symptoms tracker provides an efficient information tracking tool.
              <br />
              <br />
              Built to guide you into including the data most important to your
              child's pediatrician.
            </p>
          </div>
          <AppCarousel>
            <img src={TH1} height={900} alt="Tracking Hub screen" />
            <img src={TH2} height={650} alt="Tracking Hub screen" />
            <img src={TH3} height={600} alt="Tracking Hub screen" />
            <img src={TH4} height={750} alt="Tracking Hub screen" />
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
          <div className="cf-info">
            <h3>Caring Together</h3>
            <p>
              Caregivers Management, the perfect solution to co-management
              challenges and caregivers miscommunication.
              <br />
              <br />
              Parents. Partners. Relatives. Babysitters.
              <br />
              <br />
              Everyone is connected seamlessly, updated and ready to take over
              at the tap of a button.
            </p>
          </div>
          <AppCarousel>
            <img src={CF1} width={300} alt="Care Family screen" />
          </AppCarousel>
        </div>
      </section>

      <section className="journal">
        <div>
          <div className="j-info">
            <h3>Journal</h3>
            <p>
              Progress Journal, addressing the unique aspects if monitoring a
              child's reaction to medicine, Encurage's Journal includes daily
              entries with tracking sliders, designed to capture important data
              for followups and future evaluations.
            </p>
          </div>
          <AppCarousel>
            <img src={J1} width={240} alt="Journal app screen" />
            <img src={J2} width={280} alt="Journal app screen" />
            <img src={J3} width={170} alt="Journal app screen" />
            <img src={J4} width={280} alt="Journal app screen" />
          </AppCarousel>
        </div>
      </section>

      <section className="daily-life">
        <div>
          <div className="dl-info">
            <h3>Daily Life</h3>
            <p>
              A complete baby tracker with easy and efficient tracking tools for
              your baby’s feeding (including breastfeeding, bottle feeding and
              pumping), sleep and diapers.
              <br />
              <br />
              Beyond the daily happenings, you can also track your baby’s
              experience with introducing solids, and your child’s potty
              training journey.
            </p>
          </div>
          <AppCarousel>
            <img src={DL1} width={240} alt="daily life app screen" />
            <img src={DL2} width={290} alt="daily life app screen" />
            <img src={DL3} width={180} alt="daily life app screen" />
            <img src={DL4} width={290} alt="daily life app screen" />
          </AppCarousel>
        </div>
      </section>
    </main>
  );
};
