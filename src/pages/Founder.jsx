import React from "react";

//imgs
import Hadas from "../imgs/hadas.jpg";

import { AnimateText } from "../components/AnimateText";
import { FounderAnimation } from "../components/FounderAnimation";

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
          <div className="f-founder-container">
            <div>
              <h2>Our Founder</h2>
              <p>
                <span>Let</span> me introduce you to
                <i className="name"> Hadas Kanner-Golan</i>, our exceptional
                co-founder and CEO, leading the charge for OnCure.
              </p>
            </div>
            <div className="f-founder-info">
              <div className="f-founder-img-container">
                <img src={Hadas} alt="Founder of Company Hadas" />
                <p className="founder-title">Hadas & Emily</p>
              </div>
            </div>
          </div>

          <h2>Our Story</h2>
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
                pivotal moment that birthed the idea of OnCure. Hadas formed a
                partnership with a board-certified pediatrician and an
                enthusiastic team of developers to craft a secure, user-friendly
                solution for parents and caregivers.
              </p>
            </AnimateText>
          </div>

          <div className="f-animate-wrapper">
            <AnimateText>
              <p>
                <span>Our </span>Story is a tribute to Hadas Kanner-Golan, the
                driving force behind the well-being and happiness of families.
                Every day, we are grateful for Hadas's unwavering commitment to
                empowering parents and ensuring the well-being of their
                children. With a commitment to innovation, we have exciting
                plans for OnCure, so be sure to subscribe here to stay updated
                on our latest developments.
              </p>
            </AnimateText>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
};
