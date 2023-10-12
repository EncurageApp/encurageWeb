import React from "react";
import { NavLink } from "react-router-dom";
// import MomKids from "../imgs/mom-kids.jpg";
import MomCheckingKid from "../imgs/momcheckingkid.jpg";
import KidSurprised from "../imgs/kidsurprised.jpg";
import FingerPaint from "../imgs/fingerprintpaint.jpg";

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
          <div className="cta-cards">
            <div className="card card-1">
              <div className="card-1-img">
                <img
                  src={MomCheckingKid}
                  alt="mom checking temperature of child"
                />
              </div>
              <div className="card-1 card-info">
                <h2>Start Tracking Today</h2>
                <p>
                  Say goodbye to medication management hassles and hello to
                  peace of mind. Download now and start ensuring your child's
                  well-being effortlessly.
                </p>
                <button className="cta-btn-home">
                  <NavLink to={"AppFeatures"}>Get Started Now!</NavLink>
                </button>
              </div>
            </div>
            <div className="card card-2">
              <div className="card-2-img">
                <img
                  src={KidSurprised}
                  alt="mom checking temperature of child"
                />
              </div>
              <div className="card-2 card-info">
                <h2>Hear What Our Users Say</h2>
                <p>
                  Discover what parents and caregivers have to say about their
                  experience with our app. We value their feedback and are proud
                  to share their stories of successful health management with
                  you.
                </p>
                <button className="cta-btn-home">
                  <NavLink to={"Reviews"}>Read Reviews</NavLink>
                </button>
              </div>
            </div>
            <div className="card card-3">
              <div className="card-3-img">
                <img
                  src={FingerPaint}
                  alt="kid holding book, looking surprised"
                />
              </div>
              <div className="card-3 card-info">
                <h2>Discover Our Journey</h2>
                <p>
                  Take a step back in time and explore the story behind our
                  mission. Learn how our passion for children's health led to
                  the creation of our app and the incredible journey that
                  brought us here.
                </p>
                <button className="cta-btn-home">
                  <NavLink to={"Founder"}>Explore Our Story</NavLink>
                </button>
              </div>
            </div>
          </div>
          {/* <img
            className="home-main-img"
            src={MomKids}
            alt="kids standing in line"
          /> */}
          <p>
            We believe that every child deserves the best care, and we're here
            to provide you with the tools and support to make that happen. With
            our expertise and your dedication, together, we can give your child
            the healthiest start in life.
          </p>
        </div>
      </section>

      <section className="home-app-container">
        <h1>APP</h1>
      </section>
    </main>
  );
};
