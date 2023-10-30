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
        const thresholdMin = 200;
        const thresholdMax = 550;

        const isInViewport =
          rect.top < window.innerHeight - thresholdMax &&
          rect.bottom >= thresholdMin;

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
            <img
              loading="lazy"
              src={MomCheckingKid}
              alt="mom checking temperature of child"
            />
          </div>
          <div className="card-1 card-info">
            <h2>Protecting Your Child's Wellness</h2>
            <p>
              Discover the critical importance of precise administration and
              tracking, and how to safeguard your little one from the potential
              dangers of medication mishaps.
            </p>
            <button className="cta-btn-home">
              <NavLink to={"ChildrenHealth"}>Know The Risk</NavLink>
            </button>
          </div>
        </div>

        <div className={`card card-2 ${visibleCard === 2 ? "hovered" : ""}`}>
          <div className="card-2-img">
            <img
              loading="lazy"
              src={KidSurprised}
              alt="mom checking temperature of child"
            />
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
            <img
              loading="lazy"
              src={FingerPaint}
              alt="kid holding book, looking surprised"
            />
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
