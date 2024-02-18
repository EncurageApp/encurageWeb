import React, { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AnimateText } from "../components/AnimateText";

export const HelpCenterLayout = () => {
  const outletRef = useRef(null);

  const scrollToOutlet = () => {
    if (outletRef.current) {
      outletRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="help-layout">
      <section className="help-layout-hero">
        <AnimateText>
          <div className="hl-intro-text">
            <h2>Help Center</h2>
            <p>
              Need a hand? You're in the right place! From FAQs to personalized
              support, our Help Center has you covered.
            </p>
          </div>
        </AnimateText>
      </section>

      <h3>Welcome to our Help Center!</h3>
      <p>
        Here, you can Contact Us with questions or concerns, you'll also find
        quick access to our FAQs, Terms and Conditions, and Privacy Policy
        sections. From getting in touch to understanding our policies,
        everything you need is just a click away. Empowering you with clarity
        and support.
      </p>
      <div className="hc-nav-container">
        <NavLink to="Contact" className="hcNavLink" onClick={scrollToOutlet}>
          Contact Us
        </NavLink>
        <NavLink to="Faq" className="hcNavLink" onClick={scrollToOutlet}>
          View the Faq's
        </NavLink>
        <NavLink to="Terms" className="hcNavLink" onClick={scrollToOutlet}>
          Terms & Conditions
        </NavLink>
        <NavLink to="Privacy" className="hcNavLink" onClick={scrollToOutlet}>
          Privacy Policy
        </NavLink>
      </div>

      <div ref={outletRef}>
        <Outlet />
      </div>
    </main>
  );
};
