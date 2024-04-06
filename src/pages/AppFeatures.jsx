import React from "react";

//components
import { AppFeatureAnimation } from "../components/animations/AppFeatureAnimation";
import { AppCarousel } from "../components/AppCarousel";
import { GooglePlayBtn } from "../components/GooglePlayBtn";
import { AppStoreBtn } from "../components/AppStoreBtn";
import { AnimateText } from "../components/AnimateText";

//images
import TH1 from "../imgs/appFeatureScreens/trackingHub/TH1.png";
import TH2 from "../imgs/appFeatureScreens/trackingHub/TH2.png";
import TH3 from "../imgs/appFeatureScreens/trackingHub/TH3.png";
import TH4 from "../imgs/appFeatureScreens/trackingHub/TH4.png";
import CF1 from "../imgs/appFeatureScreens/careFamily/Care Family.png";
import EOS1 from "../imgs/appFeatureScreens/EOS/EOAS - Dashboard.png";
import EOS2 from "../imgs/appFeatureScreens/EOS/Schedule.png";
import EOS3 from "../imgs/appFeatureScreens/EOS/Edit Schedule.png";
import EOS4 from "../imgs/appFeatureScreens/EOS/Available Dose-Admin Site pressed.png";
import EOS5 from "../imgs/appFeatureScreens/EOS/Available Dose-Admin Site pressed (2) (1).png";
import DL1 from "../imgs/appFeatureScreens/DailyLife/Tracking Hub - Daily Life.png";
import DL2 from "../imgs/appFeatureScreens/DailyLife/Tracking Hub - Daily Life - Introducing Solids.png";
import DL3 from "../imgs/appFeatureScreens/DailyLife/Tracking Hub - Daily Life - Diapers.png";
import DL4 from "../imgs/appFeatureScreens/DailyLife/Tracking Hub - Daily Life - Diapers (2).png";
import DL5 from "../imgs/appFeatureScreens/DailyLife/Tracking Hub - Daily Life - Breastfeeding.png";
import J1 from "../imgs/appFeatureScreens/Journal/Journal - Dashboard.png";
import J2 from "../imgs/appFeatureScreens/Journal/Frame 93809.png";
import J3 from "../imgs/appFeatureScreens/Journal/Frame 93809 (1).png";
import J4 from "../imgs/appFeatureScreens/Journal/Frame 93807.png";
import DadBaby from "../imgs/encurage/dadbaby.jpg";
import { Link } from "react-router-dom";

export const AppFeatures = () => {
  const handleLink = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
          <div className="feature-card ">
            <h3>Tracking Hub</h3>
            <p>
              Track and log everything related to your child’s health, from
              occasional bugs to ongoing conditions. Detailed trackers for
              symptoms, side effects, vitals, therapies, and growth.
            </p>
          </div>
          <div className="feature-card ">
            <h3>Daily Life</h3>
            <p>
              Complete baby tracker with easy tools for feeding, sleep, and
              diapers. Track your baby’s experience with introducing solids and
              your child’s potty training journey.
            </p>
          </div>
          <div className="feature-card">
            <h3>Care Family</h3>
            <p>
              An essential tool for seamless care coordination. Everyone
              connected, updated, and ready at the tap of a button.
            </p>
          </div>

          <div className="feature-card ">
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

          <div className="feature-card ">
            <h3>Everything on a Schedule (EOS)</h3>
            <p>
              Comprehensive medication tracker and reminder built for your
              child’s ever-changing health journey.
            </p>
          </div>

          <div className="feature-card ">
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

      <section className="daily-life">
        <div>
          <div className="dl-info">
            <h3>Daily Life</h3>
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
            <img src={DL1} alt="daily life screen" width={225} />
            <img src={DL2} alt="introducing solids screen" width={225} />
            <img src={DL3} alt="Daiper's screen" width={225} />
            <img src={DL4} alt="Daiper's hub screen" width={225} />
            <img src={DL5} alt="breastfeeding screen" width={225} />
          </AppCarousel>
        </div>
      </section>

      <section className="care-family">
        <div>
          <div className="cf-info">
            <h3>Care Family</h3>
            <p>
              An essential tool for caring together, easily and efficiently.
              <br />
              Parents. Partners. Grandparents. Relatives. Babysitters. Everyone
              is connected seamlessly, updated and ready to take over at the tap
              of a button.
            </p>
          </div>
          <AppCarousel>
            <img src={CF1} alt="care family app screen" width={325} />
          </AppCarousel>
        </div>
      </section>

      <section className="af-download-container">
        <h2>Take Control of Your Child's Health</h2>
        <div className="af-download-wrapper">
          <img
            src={DadBaby}
            alt="dad laying next to baby"
            className="af-download-img"
          />
          <div className="af-download-info">
            <p>
              <span>Download Encurage</span> <br /> Experience effortless
              medication tracking, family coordination, and comprehensive health
              monitoring. Empower your child's well-being with just a tap.
            </p>
          </div>
          <div className="af-download-info-square"></div>
        </div>
        <div className="af-download-btns">
          <GooglePlayBtn />
          <AppStoreBtn />
        </div>
      </section>

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

      <section className="eos">
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
          <AppCarousel>
            <img src={EOS1} alt="EOS dashboard screen" width={225} />
            <img src={EOS2} alt="EOS schedule screen" width={225} />
            <img src={EOS3} alt="EOS schedule screen" width={225} />
            <img src={EOS4} alt="EOS schedule screen" width={225} />
            <img src={EOS5} alt="EOS schedule screen" width={225} />
          </AppCarousel>
        </div>
      </section>

      <section className="journal">
        <div>
          <div className="j-info">
            <h3>Journal</h3>
            <p>
              Follow and monitor your child's experience with medications and
              other treatments. How they react to a medication or treatment, the
              progress they are making, and their physical and emotional
              wellbeing. Our guided Journal Stories address the unique aspects
              important to children's health and development Sleep, appetite,
              energy, focus, mood and many more categories provide you with
              valuable insights, and help in shaping the best treatment plan for
              your child.
            </p>
          </div>
          <AppCarousel>
            <img src={J1} alt="Journal screen" width={225} />
            <img src={J2} alt="Journal screen" width={225} />
            <img src={J3} alt="Journal screen" width={225} />
            <img src={J4} alt="Journal screen" width={225} />
          </AppCarousel>
        </div>
      </section>

      <section className="af-contact-container">
        <div className="heading-container">
          <div class="heading-frame">
            <h2>
              REACH OUT
              <br />
              TO OUR TEAM
            </h2>
          </div>
        </div>

        <div className="af-contact-info">
          <h3>Have Question or Concerns?</h3>
          <p>
            We value your feedback! Get in touch with a support staff for any
            issues in our app!
          </p>
          <Link to="/HelpCenterLayout" onClick={handleLink}>
            <button className="cta-btn-home">Email Us </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
