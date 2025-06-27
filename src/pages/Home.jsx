// Home.js
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet-async";
// Components
import { CardContainer } from "../components/CardContainer";
import { Link, NavLink, useLocation } from "react-router-dom";
import { TestimonialSlider } from "../components/TestimonialSlider";

//Imgs
import HomeIllustration from "../imgs/homeImgsRevisions/illustration/HomeIllustration1.png";
import HomeIllustration2 from "../imgs/homeImgsRevisions/illustration/HomeIllustration2.png";
import HomeIllustration3 from "../imgs/homeImgsRevisions/illustration/HomeIllustration3.png";
import HomeIllustration4 from "../imgs/homeImgsRevisions/illustration/HomeIllustration4.png";

export const Home = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const handleLink = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { pathname, search } = useLocation();
  const canonical = `https://www.encurage.app${pathname}${search}`;

  return (
    <>
      <Helmet>
        <title>Kids Medicine Reminder App | Encurage</title>
        <meta
          name="description"
          content="Encurage is a unique kids health management and medicine reminder app, created especially for parents and caregivers"
        />
        <meta property="og:title" content="Encurage – Child Health Tracker" />
        <meta
          property="og:description"
          content="Encurage is a unique kids health management and medicine reminder app, created especially for parents and caregivers"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
        <meta property="og:url" content="https://encurage.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Encurage – Child Health & Medication Tracker"
        />
        <meta
          name="twitter:description"
          content="Manage and track your child's health with Encurage, a unique kids health management app."
        />
        <meta
          name="twitter:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main>
        <section className="home-hero-container">
          <div className="home-hero-container-img"></div>

          <div className="home-hero-container-text">
            <h2 data-aos="fade-in" data-aos-delay="300">
              Manage and track your child's health.
            </h2>
            <div>
              <p data-aos="fade-in" data-aos-delay="700">
                Easily.
              </p>
              <p data-aos="fade-in" data-aos-delay="1000">
                Safely.
              </p>
              <p data-aos="fade-in" data-aos-delay="1300">
                Effectively.
              </p>
            </div>
          </div>
        </section>

        <section className="home-main-intro">
          <p data-aos="fade-in">
            Reliable, comprehensive, intuitive, all-around kids’ health
            management digital platform developed especially for parents and
            caregivers.
            <br />
            <br />
            Addressing the various, and unique aspects and challenges you
            encounter while caring for a sick child, managing a child’s ongoing
            condition, and the ever changing landscape of their health journeys
            through baby, toddler, childhood and teenage years.
            <br />
            <br />
            Everything you need is bundled into a digital companion, so you can
            focus on love, hugs and cuddles ❤️
          </p>
        </section>

        <section className="home-main-container">
          <div data-aos="fade-in" className="home-main">
            <CardContainer />
          </div>
        </section>

        <section className="home-app-container">
          <div>
            <div data-aos="fade-left" className="home-app-square square-1">
              <div className="home-app-inner">
                <div className="home-app-square-inner-box-1">
                  <h3>
                    Care more.
                    <br />
                    Stress less.
                  </h3>
                  <img
                    src={HomeIllustration}
                    alt="encurage - mom holding baby"
                  />
                </div>
                <div className="home-app-square-inner-box-2">
                  <p>
                    So many details to remember. Times to calculate. Notes to
                    take. People to notify. And they’re all so important for
                    your child’s health and treatment plans, yet also confusing,
                    overwhelming, and time consuming.
                    <br />
                    <br />
                    Whether it’s the flu, ADHD, asthma, or anything in between,
                    you can safely navigate the sea of data and multitude of
                    tasks.
                    <br />
                    <br />
                    Your child’s medicine schedules are managed for you,
                    specifically designed for children’s medicine tracking.
                    <br />
                    <br />
                    Their symptoms, side effects, vitals, therapies and growth,
                    easily tracked, stored and accessed.
                    <br />
                    <br />
                    Their health journey, journaled and saved, providing you and
                    your child’s healthcare team meaningful insights. Your
                    family, synced and ready to take charge at any time through
                    a seamless caregiving management system.
                    <br />
                    <br />
                    And if a new bundle of joy has arrived, their sleep,
                    diapers, and feeding (including breastfeeding, pumping, and
                    bottle feeding) are conveniently tracked and saved, so you
                    can have everything easily accessible in one place.
                  </p>
                  <Link to="MedicationManagementTools" onClick={handleLink}>
                    <button className="cta-btn-home">Explore Our Tools</button>
                  </Link>
                </div>
              </div>
            </div>

            <div data-aos="fade-right" className="home-app-square square-2">
              <div className="home-app-inner">
                <div className="home-app-square-inner-box-1">
                  <h3>Avoid the Risk of Medication Errors</h3>
                  <img
                    src={HomeIllustration2}
                    alt="encurage - mom holding baby"
                  />
                </div>
                <div className="home-app-square-inner-box-2">
                  <p>
                    Children are more sensitive to medication errors, and
                    unfortunately much more exposed to them as well.
                    <br />
                    <br />
                    Multiple infections per year in their early years is a well
                    known reality to every parent, which means a lot of fever
                    reducers, antibiotics, and other infection treatments.
                    <br />
                    <br />
                    Add multiple caregivers; more than one sick child in the
                    family; ongoing conditions that are managed at the same
                    time; stress and tiredness; and the result is a staggering
                    rate of medication errors in children in the US.
                    <br />
                    <br />
                    Read more about the unique aspects at the root of this
                    problem, and how you can minimize the risk for your child
                    with encurage.
                  </p>
                  <Link to="ChildMedicationManagement" onClick={handleLink}>
                    <button className="cta-btn-home">
                      Medication Error Risks
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="home-app-square square-3">
              <div className="home-app-inner">
                <div className="home-app-square-inner-box-1">
                  <h3>Why We Developed Encurage</h3>
                  <img
                    src={HomeIllustration3}
                    alt="encurage - mom holding baby"
                  />
                </div>
                <div className="home-app-square-inner-box-2">
                  <p>
                    Need is the mother of invention. Facing various challenges
                    while caring for our children during sickness episodes, as
                    well as their ongoing conditions, we couldn’t find a single
                    digital tool addressing parents’ needs.
                    <br />
                    <br />
                    Diving into research about childrens’ health management at
                    home, we discovered the magnitude of the problem, and
                    realized that parents need help.
                    <br />
                    <br />
                    Our mission: provide each and every family with the right
                    toolkit for their children’s unique health management
                    journey.
                  </p>
                  <Link to="MedicationManagementTools" onClick={handleLink}>
                    <button className="cta-btn-home">About Us</button>
                  </Link>
                </div>
              </div>
            </div>

            <div data-aos="fade-right" className="home-app-square square-4">
              <div className="home-app-inner">
                <div className="home-app-square-inner-box-1">
                  <h3>Always Here For You</h3>
                  <img
                    src={HomeIllustration4}
                    alt="encurage - mom holding baby"
                  />
                </div>
                <div className="home-app-square-inner-box-2">
                  <p>
                    Caring is 24/7, year round.
                    <br />
                    <br />
                    Our support team is available for extended hours, and we
                    strive to reply as quickly as possible.
                    <br />
                    <br />
                    You can also browse our extensive FAQs, where we gathered
                    helpful instructions and tips to help you navigate quickly
                    and address your inquiries with ease. The FAQs are also
                    available in the app, and can be accessed directly from your
                    profile menu.
                    <br />
                    <br />
                    Have any feature requests, general questions, suggestions,
                    or feedback you’d like to share? We would love to hear from
                    you. Your valuable input helps us keep improving encurage.
                  </p>
                  <Link to="MedicationManagementTools" onClick={handleLink}>
                    <button className="cta-btn-home">Help Center</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-aos="fade-in" className="home-review-container">
          <div>
            <h2>What Parents Say</h2>
          </div>
          <TestimonialSlider />
        </section>

        <section className="disclaimer-container">
          <div className="disclaimer">
            <p>
              <span>IMPORTANT: </span> Encurage is here to help you track and
              manage your child's health, in accordance with the instructions
              given to you by your child's healthcare team.
              <br />
              <span>
                IT IS NOT INTENDED TO, AND DOES NOT, PROVIDE ANY KIND OF MEDICAL
                ADVICE.
              </span>
              <br />
              Always make sure you are following your child’s healthcare team
              instructions and guidelines. Please read our
              <NavLink to="helpcenter" className="disclaimer-terms-btn">
                Terms & Conditions
              </NavLink>
              for complete information.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
