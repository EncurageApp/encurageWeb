import React from "react";

// imgs
import KidJumping from "../imgs/kidjumping.jpg";
import MomKids from "../imgs/mom-kids.jpg";

// Components
import { CardContainer } from "../components/CardContainer";
import { PhoneAnimation } from "../components/PhoneAnimation";
import { NavLink } from "react-router-dom";
import { ImagePopOut } from "../components/ImagePopOut";
import { SupportAnimation } from "../components/SupportAnimation";

export const Home = () => {
  return (
    <main>
      <section className="hero-container">
        <div className="hero">
          <div className="hero-inner">
            <p>Peace of Mind, One Dose at a Time with </p>
            <h1>OnCure!</h1>
          </div>
        </div>
      </section>

      <section className="home-main-container">
        <div className="home-main">
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
          <div className="duo">
            <div className="duo-img-container">
              <img loading="lazy" src={KidJumping} alt="" />
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
              <button className="cta-btn-home">
                <NavLink>Explore Now</NavLink>
              </button>
            </div>
          </div>
          <div className="duo">
            <div className="duo-info">
              <h3>Tailored for Your Child</h3>
              <p>
                Ensure your child's health receives the personalized attention
                it deserves. With numerous options to customize, you'll have the
                power to create a unique healthcare plan that caters to your
                child's individual needs. Start now and make their well-being a
                top priority.
              </p>
              <button className="cta-btn-home">
                <NavLink>Get Started</NavLink>
              </button>
            </div>
          </div>
          <div className="duo">
            <div className="duo-info">
              <h3>Tailored for Your Child</h3>
              <p>
                Ensure your child's health receives the personalized attention
                it deserves. With numerous options to customize, you'll have the
                power to create a unique healthcare plan that caters to your
                child's individual needs. Start now and make their well-being a
                top priority.
              </p>
              <button className="cta-btn-home">
                <NavLink>Get Started</NavLink>
              </button>
            </div>
            <div className="duo-img-container">
              <img className="" loading="lazy" src={MomKids} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="home-founder-container">
        <div className="home-founder">
          <div className="home-founder-info">
            <h2>Meet the Heart Behind The Mission</h2>
            <p>
              Discover the foundation of our app by exploring the story of our
              founder. It all started with a mother's concern for her daughter's
              medicine tracking. Learn how <span>Hadas Kanner-Golan</span>
              embarked on a mission to create a user-friendly solution. Get to
              know the backstory and the inspiration behind our innovative app.
            </p>
            <button className="cta-btn-home">
              <NavLink to={"Founder"}>
                Discover the Heart Behind the App
              </NavLink>
            </button>
          </div>
        </div>
        <div>
          <ImagePopOut />
          <h3>Hadas & Emily</h3>
        </div>
      </section>

      <section className="home-review-container">
        <div className="review-wrapper">
          <div className="review-quote">
            {/* Change Testimonial to real one!!!!!  */}

            <h1>
              <blockquote>
                <span>Oncure</span> streamlines managing our child's medication
                with ease. Its user-friendly interface, reminders, and ability
                to track multiple medications have simplified our lives, giving
                us
                <span> peace of mind.</span>
              </blockquote>
            </h1>
            <h4>
              &mdash;Shane Horton
              <br />
              <em>Father Of Two</em>
              <br />
            </h4>
          </div>
          <button className="cta-btn-home">Read More Reviews</button>
        </div>
      </section>
      <section>
        <SupportAnimation />
      </section>
    </main>
  );
};
