import React from "react";

// imgs
import KidJumping from "../imgs/encurage/kidjumping.jpg";
import MomKids from "../imgs/encurage/mom-kids.jpg";

// Components
import { CardContainer } from "../components/CardContainer";
import { PhoneAnimation } from "../components/animations/PhoneAnimation";
import { Link, NavLink } from "react-router-dom";
import { TestimonialSlider } from "../components/TestimonialSlider";

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
        <PhoneAnimation />
        <div className="duo-container">
          <div data-aos="fade-down" className="duo">
            <div className="duo-img-container">
              <img src={KidJumping} alt=" kid jumping" />
            </div>

            <div className="duo-info">
              <h3>Tailored for Your Child</h3>
              <p>
                Ensure your child's health receives the personalized attention
                it deserves. With numerous options to customize, you'll have the
                power to create a unique healthcare plan that caters to your
                child's individual needs. Start now and make their well-being a
                top priority.
              </p>

              <Link to="AppFeatures" onClick={handleLink}>
                <button className="cta-btn-home">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="duo">
            <div className="duo-info">
              <h2 data-aos="fade-right">Your Child's Health, Your Way</h2>
              <p data-aos="fade-left">
                Take control of your child's health with our app. Prioritize
                their well-being and give them the personalized care they
                deserve. Get started today.
              </p>

              <Link data-aos="fade-right" to="AppFeatures" onClick={handleLink}>
                <button className="cta-btn-home">Explore Now </button>
              </Link>
            </div>
          </div>
          <div data-aos="fade-up" className="duo">
            <div className="duo-info">
              <h3>Curiosity Unleashed: The Untold Dangers of Mis-Dosage</h3>
              <p>
                Are you curious to know the untold dangers of mis-dosage when it
                comes to your child's health? It's a story that every parent
                should explore. Our app offers a fascinating journey into these
                risks, providing a deeper understanding of the consequences and
                how to protect your child. Let your curiosity lead the way to
                essential knowledge.
              </p>

              <Link to="ChildrenHealth" onClick={handleLink}>
                <button className="cta-btn-home">Get Started Today</button>
              </Link>
            </div>
            <div className="duo-img-container">
              <img src={MomKids} alt="mom with kids" />
            </div>
          </div>
        </div>
      </section>

      <section className="home-founder-container">
        <div data-aos="fade-right" className="home-founder">
          <div className="home-founder-info">
            <h2>Meet the Heart Behind The Mission</h2>
            <p>
              Discover the foundation of our app by exploring the story of our
              founder. It all started with a mother's concern for her daughter's
              medicine tracking. Learn how <span>Hadas Kanner-Golan</span>
              embarked on a mission to create a user-friendly solution. Get to
              know the backstory and the inspiration behind our innovative app.
            </p>

            <Link to="Founder" onClick={handleLink}>
              <button className="cta-btn-home">
                Discover the Heart Behind the App
              </button>
            </Link>
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
