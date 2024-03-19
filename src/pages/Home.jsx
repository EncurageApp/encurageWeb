// Components
import { CardContainer } from "../components/CardContainer";
import { Link, NavLink } from "react-router-dom";
import { TestimonialSlider } from "../components/TestimonialSlider";

//Imgs
import HomeIllustration from "../imgs/homeImgsRevisions/illustration/HomeIllustration1.png";
import HomeIllustration2 from "../imgs/homeImgsRevisions/illustration/HomeIllustration2.png";
import HomeIllustration3 from "../imgs/homeImgsRevisions/illustration/HomeIllustration3.png";
import HomeIllustration4 from "../imgs/homeImgsRevisions/illustration/HomeIllustration4.png";

export const Home = () => {
  const handleLink = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <section className="home-hero-container">
        <div>
          <h2 data-aos="fade-in" data-aos-delay="500">
            Manage and track your child's health.
          </h2>
          <p data-aos="fade-in" data-aos-delay="1000">
            Easily.
          </p>
          <p data-aos="fade-in" data-aos-delay="2000">
            Safely.
          </p>
          <p data-aos="fade-in" data-aos-delay="3000">
            Effectively.
          </p>
        </div>
      </section>

      <section className="home-main-intro">
        <p data-aos="fade-in">
          Reliable, comprehensive, intuitive, all-around kids’ health management
          digital platform developed especially for parents and caregivers.
          <br />
          Addressing the various, and unique aspects and challenges you
          encounter while caring for a sick child, managing a child’s ongoing
          condition, and the ever changing landscape of their health journeys
          through baby, toddler, childhood and teenage years.
          <br />
          Everything you need is bundled into a digital companion, so you can
          focus on love, hugs and cuddles ❤️
        </p>
      </section>

      <section className="home-main-container">
        <div data-aos="fade-in" className="home-main">
          <h2>Your Child's Health, is Our Priority</h2>
          <p>
            We understand the challenges that parents face in managing their
            children's health, and that's why we've developed a comprehensive
            app dedicated to making this task easier and more efficient. From
            medication tracking to timely reminders, our app ensures that you're
            always in control of your child's well-being.
          </p>
          <CardContainer />

          <p>
            We believe that every child deserves the best care, and we're here
            to provide you with the tools and support to make that happen. With
            our expertise and your dedication, together, we can give your child
            the healthiest start in life.
          </p>
        </div>
      </section>

      <section className="home-app-container">
        <h2 data-aos="fade-in">
          Welcome to the Future of Child Health Management
        </h2>

        <div>
          <div data-aos="fade-left" className="home-app-square square-1">
            <div className="home-app-inner">
              <div className="home-app-square-inner-box-1">
                <h3>
                  Care more.
                  <br />
                  Stress less.
                </h3>
                <img src={HomeIllustration} alt="encurage - mom holding baby" />
              </div>
              <div className="home-app-square-inner-box-2">
                <p>
                  So many details to remember. Times to calculate. Notes to
                  take. People to notify. And they’re all so important for your
                  child’s health and treatment plans, yet also confusing,
                  overwhelming, and time consuming.
                  <br />
                  Whether it’s the flu, ADHD, asthma, or anything in between,
                  you can safely navigate the sea of data and multitude of
                  tasks.
                  <br />
                  Your child’s medicine schedules are managed for you,
                  specifically designed for children’s medicine tracking.
                  <br />
                  Their symptoms, side effects, vitals, therapies and growth,
                  easily tracked, stored and accessed.
                  <br />
                  Their health journey, journaled and saved, providing you and
                  your child’s healthcare team meaningful insights. Your family,
                  synced and ready to take charge at any time through a seamless
                  caregiving management system.
                  <br />
                  And if a new bundle of joy has arrived, their sleep, diapers,
                  and feeding (including breastfeeding, pumping, and bottle
                  feeding) are conveniently tracked and saved, so you can have
                  everything easily accessible in one place.
                </p>
                <Link to="AppFeatures" onClick={handleLink}>
                  <button className="cta-btn-home">Explore Our Tools</button>
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" className="home-app-square square-2">
            <div className="home-app-inner">
              <div className="home-app-square-inner-box-1">
                <h3>Avoid the Risk of Medication Errors.</h3>
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
                  Multiple infections per year in their early years is a well
                  known reality to every parent, which means a lot of fever
                  reducers, antibiotics, and other infection treatments.
                  <br />
                  Add multiple caregivers; more than one sick child in the
                  family; ongoing conditions that are managed at the same time;
                  stress and tiredness; and the result is a staggering rate of
                  medication errors in children in the US.
                  <br />
                  Read more about the unique aspects at the root of this
                  problem, and how you can minimize the risk for your child with
                  encurage.
                </p>
                <Link to="ChildrenHealth" onClick={handleLink}>
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
                <h3>Why We Developed Encurage.</h3>
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
                  Diving into research about childrens’ health management at
                  home, we discovered the magnitude of the problem, and realized
                  that parents need help.
                  <br />
                  Our mission: provide each and every family with the right
                  toolkit for their children’s unique health management journey.
                </p>
                <Link to="AppFeatures" onClick={handleLink}>
                  <button className="cta-btn-home">About Us</button>
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" className="home-app-square square-4">
            <div className="home-app-inner">
              <div className="home-app-square-inner-box-1">
                <h3>Always Here For You.</h3>
                <img
                  src={HomeIllustration4}
                  alt="encurage - mom holding baby"
                />
              </div>
              <div className="home-app-square-inner-box-2">
                <p>
                  Caring is 24/7, year round.
                  <br />
                  Our support team is available for extended hours, and we
                  strive to reply as quickly as possible.
                  <br />
                  You can also browse our extensive FAQs, where we gathered
                  helpful instructions and tips to help you navigate quickly and
                  address your inquiries with ease. The FAQs are also available
                  in the app, and can be accessed directly from your profile
                  menu.
                  <br />
                  Have any feature requests, general questions, suggestions, or
                  feedback you’d like to share? We would love to hear from you.
                  Your valuable input helps us keep improving encurage.
                </p>
                <Link to="AppFeatures" onClick={handleLink}>
                  <button className="cta-btn-home">Help Center</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-in" className="home-review-container">
        <div>
          <h2>See What Parents Say</h2>
        </div>
        <TestimonialSlider />
      </section>

      <section className="disclaimer-container">
        <div className="disclaimer">
          <p>
            <span>IMPORTANT: </span> Encurage is here to help you track and
            manage your child's health, in accordance with the instructions
            given to you by your child's healthcare team.
            <span>
              IT IS NOT INTENDED TO, AND DOES NOT, PROVIDE ANY KIND OF MEDICAL
              ADVICE.
            </span>
            Always make sure you are following your child’s healthcare team
            instructions and guidelines. Please read our
            <NavLink to="HelpCenterLayout" className="disclaimer-terms-btn">
              Terms & Conditions
            </NavLink>
            for complete information.
          </p>
        </div>
      </section>
    </main>
  );
};
