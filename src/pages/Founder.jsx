import React from "react";

//imgs
import Hadas from "../imgs/hadas.jpg";

export const Founder = () => {
  return (
    <main className="founder-page">
      <section className="f-hero-container">
        <h2>
          From Idea to <span>Innovation</span>
        </h2>
      </section>
      <section>
        <div className="f-story-container">
          <h2>Our Story</h2>
          <p>
            Let me introduce you to <i className="name">Hadas Kanner-Golan</i>,
            our exceptional co-founder and CEO, leading the charge for OnCure.
          </p>
          <p>
            When her daughter, Emily, was struck by strep throat and a high
            fever, Hadas faced a daunting task: managing the timing of her fever
            reducer doses. She was surprised to discover the absence of a
            dedicated app to aid parents in monitoring their children's
            medication. While numerous medication reminders catered to adults,
            they fell short in meeting the unique requirements of parents like
            Hadas.
          </p>
          <p>
            Her response was to dive into in-depth research, probing the issue
            of medication errors within households. Through this exploration,
            she unveiled the vastness of the problem and the particular
            challenges it presented. This was the pivotal moment that birthed
            the idea of OnCure. Hadas formed a partnership with a
            board-certified pediatrician and an enthusiastic team of developers
            to craft a secure, user-friendly solution for parents and
            caregivers.
          </p>
        </div>
      </section>
      <section className="f-founder-container">
        <h2>Our Founder</h2>
        <div className="f-founder-info">
          <div className="f-founder-img-container">
            <img src={Hadas} alt="Founder of Company Hadas" />
          </div>
          <div>
            <h3>Hadas</h3>
            <p>
              Our Story is a tribute to Hadas Kanner-Golan, the driving force
              behind the well-being and happiness of families.
            </p>
            <p>
              Every day, we are grateful for Hadas's unwavering commitment to
              empowering parents and ensuring the well-being of their children.
              With a commitment to innovation, we have exciting plans for
              OnCure, so be sure to subscribe here to stay updated on our latest
              developments.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
