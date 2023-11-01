import React from "react";

//imgs
import Hadas from "../imgs/hadas.jpg";
import DreamBig from "../imgs/dreambig.jpg";

export const Founder = () => {
  return (
    <main>
      <section className="founder-story-container">
        <h2>Our Story</h2>
        <div className="founder-img-container ">
          <img
            src={DreamBig}
            alt="The Words Dream Big in White on a Black Background"
          />
          <p></p>
        </div>
      </section>
      <section className="founder-hero-container">
        <h2>Our Founder</h2>
        <div className="founder-hero-info">
          <div className="founder-img-container">
            <img src={Hadas} alt="Founder of Company Hadas" />
          </div>
          <div>
            <h3>Hadas</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              iste officiis pariatur repellendus commodi, facere cum debitis
              repudiandae atque facilis.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
