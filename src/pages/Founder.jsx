import React from "react";

//imgs
import Hadas from "../imgs/hadas.jpg";
import EmailIcon from "../imgs/email-icon.png";

//components
import { AnimateText } from "../components/AnimateText";
import { FounderAnimation } from "../components/FounderAnimation";
import { TimeLine } from "../components/TimeLine";
import { MissionAnimation } from "../components/MissionAnimation";

export const Founder = () => {
  return (
    <main className="founder-page">
      <section className="f-hero-container">
        <h2>
          From Idea to <span>Innovation</span>
        </h2>
        <FounderAnimation />
      </section>
      <section>
        <div className="f-story-container">
          <h2>Our Story</h2>
          <div className="f-animate-wrapper">
            <AnimateText>
              <p>
                <span>Our </span>Story is a tribute to{" "}
                <em className="name">Hadas Kanner-Golan</em>, the driving force
                behind the well-being and happiness of families. Every day, we
                are grateful for Hadas's unwavering commitment to empowering
                parents and ensuring the well-being of their children.
              </p>
            </AnimateText>
          </div>
          <div className="f-animate-wrapper">
            <AnimateText>
              <p>
                <span>When</span> her daughter, Emily, was struck by strep
                throat and a high fever, Hadas faced a daunting task: managing
                the timing of her fever reducer doses. She was surprised to
                discover the absence of a dedicated app to aid parents in
                monitoring their children's medication. While numerous
                medication reminders catered to adults, they fell short in
                meeting the unique requirements of parents like Hadas.
              </p>
            </AnimateText>
          </div>

          <div className="f-animate-wrapper">
            <AnimateText>
              <p>
                <span>Her</span> response was to dive into in-depth research,
                probing the issue of medication errors within households.
                Through this exploration, she unveiled the vastness of the
                problem and the particular challenges it presented. This was the
                pivotal moment that birthed the idea of Encurage. Hadas formed a
                partnership with a board-certified pediatrician and an
                enthusiastic team of developers to craft a secure, user-friendly
                solution for parents and caregivers.
              </p>
            </AnimateText>
          </div>
        </div>
      </section>

      <section className="f-founder-container">
        <div className="f-founder-img-container">
          <div className="f-founder-intro">
            <h2>Our Founder</h2>
            <p>
              <span>Let</span> me introduce you to
              <em className="name"> Hadas Kanner-Golan</em>, our exceptional
              co-founder and CEO, leading the charge for Encurage.
            </p>
          </div>
          <div>
            <img src={Hadas} alt="Founder of Company Hadas" />
            <p className="founder-title"> ~ Hadas & Emily ~ </p>
          </div>
        </div>
        <div class="animated-border-quote">
          <blockquote>
            <p>
              <q>
                Parents are a force of nature. Nothing is impossible when it
                comes to helping, protecting, and caring for our kids. I am so
                grateful for the opportunity to support families in the ever
                evolving journey of their children's health, and for the ability
                to keep developing and enhancing Encurage through the invaluable
                feedback and suggestions of our community of parents and
                caregivers. My team and I will keep working hard to be your
                trusted digital companion.
              </q>
            </p>
            <cite>Hadas Kanner-Golan</cite>
          </blockquote>
        </div>
      </section>

      <section className="f-timeline">
        <TimeLine />
      </section>

      <section className="f-mission-container">
        <h2>Our Lifelong Mission</h2>
        <div>
          <div>
            <MissionAnimation />
          </div>
          <p>
            Our Commitment to Innovation drives everything we do at Encurage.
            We're dedicated to staying ahead of the curve, creating
            state-of-the-art solutions for parents and caregivers. Collaborating
            with experts, we continuously push boundaries to redefine child
            healthcare. With OnCure, you can trust that you'll have access to
            the most advanced and user-friendly solutions for your child's
            well-being. Join us in redefining child care through innovation.
          </p>
        </div>
      </section>

      <section className="f-subscribe-container">
        <div className="subscribe-wrapper">
          <h3>
            We have exciting plans for Encurage, so be sure to subscribe here to
            stay updated on our latest developments.
          </h3>
          <div className="subscribe-box">
            <div className="ribbon">
              <span>Join Today</span>
            </div>
            <div className="subscribe">
              <img src={EmailIcon} alt="email flying in clouds" />
              <h3>Subscribe</h3>
              <p> to our newsletter to get updates about our new products</p>
              <form className="f-email-form">
                <input
                  className="f-email-bar"
                  type="email"
                  name="Email"
                  placeholder="Enter your email address"
                  autoFocus
                  autoComplete
                  required
                  checked
                />
                <button className="cta-btn-home">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
