/* EXPLORE PAGE */
import React, { useRef, useEffect } from "react";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

//components
import { GooglePlayBtn } from "../components/GooglePlayBtn";
import { AppStoreBtn } from "../components/AppStoreBtn";

//images

import ANW1 from "../imgs/MedicationManagementToolscreens/ANW/ANW1.png";
import ANW2 from "../imgs/MedicationManagementToolscreens/ANW/ANW2.png";
import ANW3 from "../imgs/MedicationManagementToolscreens/ANW/ANW3.png";
import ANW4 from "../imgs/MedicationManagementToolscreens/ANW/ANW4.png";

import EOAS1 from "../imgs/MedicationManagementToolscreens/EOAS/EOAS1.png";
import EOAS2 from "../imgs/MedicationManagementToolscreens/EOAS/EOAS2.png";
import EOAS3 from "../imgs/MedicationManagementToolscreens/EOAS/EOAS3.png";

import TH1 from "../imgs/MedicationManagementToolscreens/trackingHub/TH1.png";
import TH2 from "../imgs/MedicationManagementToolscreens/trackingHub/TH2.png";
import TH3 from "../imgs/MedicationManagementToolscreens/trackingHub/TH3.png";
import TH4 from "../imgs/MedicationManagementToolscreens/trackingHub/TH4.png";

import CF1 from "../imgs/MedicationManagementToolscreens/careFamily/CF1.png";

import J1 from "../imgs/MedicationManagementToolscreens/Journal/Journal1.png";
import J2 from "../imgs/MedicationManagementToolscreens/Journal/Journal2.png";
import J3 from "../imgs/MedicationManagementToolscreens/Journal/Journal3.png";
import J4 from "../imgs/MedicationManagementToolscreens/Journal/Journal4.png";

import BL1 from "../imgs/MedicationManagementToolscreens/DailyLife/DL1.png";
import BL2 from "../imgs/MedicationManagementToolscreens/DailyLife/DL2.png";
import BL3 from "../imgs/MedicationManagementToolscreens/DailyLife/DL3.png";
import BL4 from "../imgs/MedicationManagementToolscreens/DailyLife/DL4.png";

//icons
import Journal from "../imgs/icons/journal.png";
import Heart from "../imgs/icons/heartclipboard.png";
import Schedule from "../imgs/icons/schedule.png";
import People from "../imgs/icons/3people.png";
import HighFrequency from "../imgs/icons/highfrequency.png";
import DailyLife from "../imgs/icons/dailylife.png";

export const MedicationManagementTools = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const asNeededRef = useRef(null);
  const scheduledRef = useRef(null);
  const trackingRef = useRef(null);
  const careGiverRef = useRef(null);
  const healthRef = useRef(null);
  const babyRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Invalid ref: Cannot scroll to section");
    }
  };

  const { pathname, search } = useLocation();
  const canonical = `https://www.encurage.app${pathname}${search}`;

  return (
    <>
      <Helmet>
        <title>Explore | Encurage</title>
        <meta
          name="description"
          content="Tailor-Made tools for parents and caregivers provide simple, efficient solutions to at-home health management challenges"
        />
        <meta property="og:title" content="Encurage – Child Health Tracker" />
        <meta
          property="og:description"
          content="Tailor-Made tools for parents and caregivers provide simple, efficient solutions to at-home health management challenges"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
        <meta
          property="og:url"
          content="https://encurage.app/MedicationManagementTools"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Encurage – Child Health & Medication Tracker"
        />
        <meta
          name="twitter:description"
          content="Tailor-Made tools for parents and caregivers provide simple, efficient solutions to at-home health management challenges"
        />
        <meta
          name="twitter:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="MedicationManagementTools-page">
        <section className="af-hero-container">
          <div className="af-hero-container-img"></div>
          <div className="af-hero-container-text">
            <h2 data-aos="fade-in" data-aos-delay="400">
              Just Add TLC
            </h2>

            <p data-aos="fade-in" data-aos-delay="700">
              Every aspect of caring for your child at home has its own
              dedicated feature, built and designed for{" "}
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
          <div>
            <div className="anw-info">
              <h3>As-Needed Wizard</h3>
              <p>
                Specifically designed for as-needed (PRN) medications, our
                unique schedule builder generates a dynamic medication schedule
                with enhanced editing capabilities, that updates itself
                automatically in alignment with your child’s needs, while
                keeping safe time gaps.
                <br />
                <br />
                All done with a few taps. No reminder setting, no updating, no
                calculating.
              </p>
            </div>
            <div className="img-container anw-img-container">
              <div className="img-inner">
                <img
                  className="screen anw-screen-1"
                  src={ANW4}
                  alt="as needed feature example"
                />
                <img
                  className="screen anw-screen-2"
                  src={ANW3}
                  alt="as needed feature example"
                />
                <img
                  className="screen anw-screen-3"
                  src={ANW2}
                  alt="as needed feature example"
                />
                <img
                  className="screen anw-screen-4"
                  src={ANW1}
                  alt="as needed feature example"
                />
              </div>
            </div>
          </div>
        </section>

        <section ref={scheduledRef} className="eos">
          <div>
            <div className="eos-info">
              <h3>Everything on a Schedule</h3>
              <p>
                Built for your child’s ever changing health journey, a
                comprehensive, advanced medication tracker and reminder, with
                specific solutions for short-term and ongoing treatments of all
                types.
              </p>
            </div>
            <div className="img-container eos-img-container">
              <div className="img-inner">
                <img
                  className="screen eos-screen-2"
                  src={EOAS2}
                  alt="everything on a schedule screen example"
                />
                <div className="screen eos-screen-1">
                  <img
                    src={EOAS1}
                    alt="everything on a schedule screen example"
                  />
                </div>
                <img
                  className="screen eos-screen-3"
                  src={EOAS3}
                  alt="everything on a schedule screen example"
                />
              </div>
            </div>
          </div>
        </section>

        <section ref={trackingRef} className="tracking-hub">
          <div>
            <div className="tracking-info">
              <h3>Tracking Hub</h3>
              <p>
                Track and log everything related to your child’s health, whether
                it’s an occasional bug or an ongoing condition requiring daily
                monitoring.
                <br />
                <br />
                Symptoms, side effects, vitals, therapies, and growth categories
                include detailed and guided trackers, covering important
                information for you and your child’s pediatrician, and helping
                you navigate a sea of data easily and effectively.
              </p>
            </div>
            <div className="img-container th-img-container">
              <div className="img-inner">
                <div className="screen th-screen-1">
                  <img src={TH1} alt="tracking-hub screen example" />
                </div>
                <div className="screen th-screen-2">
                  <img src={TH2} alt="tracking-hub screen example" />
                </div>
                <div className="screen th-screen-3">
                  <img src={TH4} alt="tracking-hub screen example" />
                </div>
                <div className="screen th-screen-4">
                  <img src={TH3} alt="tracking-hub screen example" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ch-download-break">
          <p>Download and Explore</p>
          <GooglePlayBtn />
          <AppStoreBtn />
        </div>

        <section ref={careGiverRef} className="care-family">
          <div>
            <div className="cf-info">
              <h3>Caring Together</h3>
              <p>
                An essential tool for caring together, easily and efficiently.
                <br />
                <br />
                Parents. Partners. Grandparents. Relatives. Babysitters.
                Everyone is connected seamlessly, updated and ready to take over
                at the tap of a button.
              </p>
            </div>
            <div className="img-container cf-img-container">
              <div className="img-inner">
                <img
                  className="screen cf-screen-1"
                  src={CF1}
                  alt="as needed feature example"
                />
              </div>
            </div>
          </div>
        </section>

        <section ref={healthRef} className="journal">
          <div>
            <div className="j-info">
              <h3>Journal</h3>
              <p>
                Follow and monitor your child's experience with medications and
                other treatments. How they react to a medication or treatment,
                the progress they are making, and their physical and emotional
                well being.
                <br />
                <br />
                Our guided Journal Stories address the unique aspects important
                to children's health and development.
                <br />
                Sleep, appetite, energy, focus, mood and many more categories
                provide you with valuable insights, and help in shaping the best
                treatment plan for your child.
              </p>
            </div>
            <div className="img-container j-img-container">
              <div className="img-inner">
                <div className="screen j-screen-1">
                  <img src={J1} alt="journal screen example" />
                </div>
                <div className="screen j-screen-2">
                  <img src={J2} alt="journal screen example" />
                </div>
                <div className="screen j-screen-3">
                  <img src={J3} alt="journal screen example" />
                </div>
                <div className="screen j-screen-4">
                  <img src={J4} alt="journal screen example" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="coming-soon-banner">
          <h4 className="banner-text">Coming Soon!</h4>
        </div>

        <section ref={babyRef} className="baby-life">
          <div>
            <div className="bl-info">
              <h3>Baby Life</h3>
              <p>
                A complete baby tracker with easy and efficient tracking tools
                for your baby’s feeding (including breastfeeding, bottle feeding
                and pumping), sleep and diapers.
                <br />
                Beyond the daily happenings, you can also track your baby’s
                experience with introducing solids, and your child’s potty
                training journey.
              </p>
            </div>
            <div className="img-container bl-img-container">
              <div className="img-inner">
                <div className="screen bl-screen-1">
                  <img src={BL1} alt="baby life screen example" />
                </div>
                <div className="screen bl-screen-2">
                  <img src={BL2} alt="baby life screen example" />
                </div>
                <div className="screen bl-screen-3">
                  <img src={BL3} alt="baby life screen example" />
                </div>
                <div className="screen bl-screen-4">
                  <img src={BL4} alt="baby life screen example" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
