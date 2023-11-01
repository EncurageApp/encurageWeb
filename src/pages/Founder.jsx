import React from "react";

//imgs
import Hadas from "../imgs/hadas.jpg";
import DreamBig from "../imgs/dreambig.jpg";

export const Founder = () => {
  return (
    <main>
      <section className="f-story-container">
        <h2>
          From Idea to <span>Innovation</span>
        </h2>
        <div className="f-story-img-container ">
          <div>
            <p>
              <span>Our Story</span> at OnCure begins with Hadas Kanner-Golan, a
              remarkable co-founder and our esteemed CEO, at the helm.
            </p>
          </div>
          <img
            src={DreamBig}
            alt="The Words Dream Big in White on a Black Background"
          />

          <p>
            In the initial chapters of our journey, Hadas found herself facing a
            daunting challenge when her daughter, Emily, fell ill with strep
            throat and a high fever. The struggle to manage the timing of
            Emily's fever reducer doses led her to seek a solution, but to her
            surprise, there was no dedicated app to assist parents in tracking
            their children's medication. While adult-focused medication
            reminders abounded, they failed to address the unique needs of
            parents.
          </p>
          <p>
            This pivotal moment marked the genesis of OnCure. Hadas delved into
            comprehensive research, unveiling the scope of medication errors
            within homes and the unique challenges it posed. Fueled by her
            passion, she joined forces with a board-certified pediatrician and a
            dedicated team of developers to create a secure, user-friendly
            solution for parents and caregivers.
          </p>
        </div>
      </section>
      <section className="f-hero-container">
        <h2>Our Founder</h2>
        <div className="f-hero-info">
          <div className="f-hero-img-container">
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
