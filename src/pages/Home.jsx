import React from "react";

// import MomKids from "../imgs/mom-kids.jpg";
import { CardContainer } from "../components/CardContainer";

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

      <section className="home-app-container"></section>
    </main>
  );
};
