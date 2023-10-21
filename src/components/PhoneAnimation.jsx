import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1697616794178 (1).json";
import { NavLink } from "react-router-dom";

export const PhoneAnimation = () => {
  return (
    <>
      <div className="home-app-intro">
        <h2>Welcome to the Future of Child Health Management</h2>
        <Lottie loop={true} animationData={animationData} />
        <p>
          Our cutting-edge app is here to transform the way you care for your
          child's well-being. Seamlessly manage medications, track health
          milestones, and ensure a healthier tomorrow with ease. Join us on this
          remarkable journey to a world where your child's health is just a tap
          away.
        </p>
      </div>
      <div className="home-app-icons">
        <div className="icons">
          <div className="icon-1">
            <h3>Tailored for Your Child</h3>
            <p>
              Ensure your child's health receives the personalized attention it
              deserves. With numerous options to customize, you'll have the
              power to create a unique healthcare plan that caters to your
              child's individual needs. Start now and make their well-being a
              top priority.
            </p>
            <button className="cta-btn-home">
              <NavLink>Get Started</NavLink>
            </button>
          </div>
        </div>
        <div className="icons">
          <div className="icon-2">
            <h3>All-in-One Solution</h3>
            <p>
              Simplify your child's healthcare journey with our comprehensive
              all-in-one solution. Say goodbye to the confusion and stress of
              managing multiple medications. Explore now to experience the
              convenience of having everything you need for your child's health
              in one place.
            </p>
            <button className="cta-btn-home">
              <NavLink>Explore Now</NavLink>
            </button>
          </div>
        </div>
        <div className="icons">
          <div className="icon-3">
            <h3>Pediatrician Approved </h3>
            <p>
              Trust what the experts trust. Our app, recommended by
              pediatricians, ensures your child's health is in safe hands.
              Secure your child's well-being now.
            </p>
            <button className="cta-btn-home">
              <NavLink>Get the App Today</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
