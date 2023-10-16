import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MomCheckingKid from "../imgs/momcheckingkid.jpg";
import KidSurprised from "../imgs/kidsurprised.jpg";
import FingerPaint from "../imgs/fingerprintpaint.jpg";

export const CardContainer = () => {
  const [visibleCard, setVisibleCard] = useState(null);

  const handleScroll = () => {
    const cardElements = document.querySelectorAll(".card");
    if (cardElements) {
      let anyCardVisible = false;

      cardElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const threshold = 400;
        const isInViewport =
          rect.top < window.innerHeight - threshold && rect.bottom >= threshold;

        if (isInViewport) {
          setVisibleCard(index + 1);
          anyCardVisible = true;
        }
      });

      if (!anyCardVisible) {
        setVisibleCard(null);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="cta-cards-container">
      <div className="card-component-container">
        <div className={`card card-1 ${visibleCard === 1 ? "hovered" : ""}`}>
          <div className="card-1-img">
            <img src={MomCheckingKid} alt="mom checking temperature of child" />
          </div>
          <div className="card-1 card-info">
            <h2>Start Tracking Today</h2>
            <p>
              Say goodbye to medication management hassles and hello to peace of
              mind. Download now and start ensuring your child's well-being
              effortlessly.
            </p>
            <button className="cta-btn-home">
              <NavLink to={"AppFeatures"}>Get Started Now!</NavLink>
            </button>
          </div>
        </div>

        <div className={`card card-2 ${visibleCard === 2 ? "hovered" : ""}`}>
          <div className="card-2-img">
            <img src={KidSurprised} alt="mom checking temperature of child" />
          </div>
          <div className="card-2 card-info">
            <h2>Hear What Our Users Say</h2>
            <p>
              Discover what parents and caregivers have to say about their
              experience with our app. We value their feedback and are proud to
              share their stories of successful health management with you.
            </p>
            <button className="cta-btn-home">
              <NavLink to={"Reviews"}>Read Reviews</NavLink>
            </button>
          </div>
        </div>
        <div className={`card card-3 ${visibleCard === 3 ? "hovered" : ""}`}>
          <div className="card-3-img">
            <img src={FingerPaint} alt="kid holding book, looking surprised" />
          </div>
          <div className="card-3 card-info">
            <h2>Discover Our Journey</h2>
            <p>
              Take a step back in time and explore the story behind our mission.
              Learn how our passion for children's health led to the creation of
              our app and the incredible journey that brought us here.
            </p>
            <button className="cta-btn-home">
              <NavLink to={"Founder"}>Explore Our Story</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
