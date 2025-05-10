import React, { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const HelpCenter = () => {
  const outletRef = useRef(null);

  const scrollToOutlet = () => {
    if (outletRef.current) {
      outletRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Help center | Encurage</title>
        <meta
          name="description"
          content="Information about our services and policies"
        />
        <meta property="og:title" content="Encurage – Child Health Tracker" />
        <meta
          property="og:description"
          content="Information about our services and policies"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
        <meta property="og:url" content="https://encurage.app/helpcenter" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Encurage – Child Health & Medication Tracker"
        />
        <meta
          name="twitter:description"
          content="Information about our services and policies"
        />
        <meta
          name="twitter:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
      </Helmet>
      <main className="help-layout">
        <section className="hc-hero-container">
          <div className="hc-hero-container-text">
            <h2 data-aos="fade-in" data-aos-delay="400">
              Your Questions, answered.
            </h2>

            <p data-aos="fade-in" data-aos-delay="700">
              Whether you’re looking for more information about our services and
              policies, have specific questions about the app, or want to get in
              touch with us, we gathered all assistance channels here for your
              convenience.
            </p>
          </div>
        </section>

        <div className="hc-nav-container">
          <NavLink
            to="Contact"
            className="hcNavLink hcnl1"
            onClick={scrollToOutlet}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="Faq"
            className="hcNavLink hcnl2"
            onClick={scrollToOutlet}
          >
            FAQ's
          </NavLink>
          <NavLink
            to="Terms"
            className="hcNavLink hcnl3"
            onClick={scrollToOutlet}
          >
            Terms & Conditions
          </NavLink>
          <NavLink
            to="Privacy"
            className="hcNavLink hcnl4"
            onClick={scrollToOutlet}
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="DataPolicy"
            className="hcNavLink 5"
            onClick={scrollToOutlet}
          >
            Consumer Health <br />
            Data Privacy Policy
          </NavLink>
        </div>

        <div ref={outletRef}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
