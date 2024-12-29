import React, { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const HelpCenterLayout = () => {
  const outletRef = useRef(null);

  const scrollToOutlet = () => {
    if (outletRef.current) {
      outletRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="help-layout">
      <section className="hc-hero-container">
        <div className="hc-hero-container-text">
          <h2 data-aos="fade-in" data-aos-delay="500">
            Your Questions, answered.
          </h2>

          <p data-aos="fade-in" data-aos-delay="2000">
            Whether you’re looking for more information about our services and
            policies, have specific questions about the app, or want to get in
            touch with us, we gathered all assistance channels here for your
            convenience.
          </p>
        </div>
      </section>

      <div className="hc-nav-container">
        <NavLink to="Contact" className="hcNavLink" onClick={scrollToOutlet}>
          Contact Us
        </NavLink>
        <NavLink to="Faq" className="hcNavLink" onClick={scrollToOutlet}>
          FAQ's
        </NavLink>
        <NavLink to="Terms" className="hcNavLink" onClick={scrollToOutlet}>
          Terms & Conditions
        </NavLink>
        <NavLink to="Privacy" className="hcNavLink" onClick={scrollToOutlet}>
          Privacy Policy
        </NavLink>
        <NavLink to="DataPolicy" className="hcNavLink" onClick={scrollToOutlet}>
          Consumer Health <br />
          Data Privacy Policy
        </NavLink>
      </div>

      <div ref={outletRef}>
        <Outlet />
      </div>
    </main>
  );
};
