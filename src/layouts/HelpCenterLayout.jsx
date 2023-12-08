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
    <div className="help-layout">
      <div className="help-layout-img">
        <div className="help-layout-intro">
          <h2>Help Center</h2>
        </div>
      </div>
      <p>
        Welcome to our Help Center! Here, you can Contact Us with questions or
        concerns, you'll also find quick access to our FAQs, Terms and
        Conditions, and Privacy Policy sections. From getting in touch to
        understanding our policies, everything you need is just a click away.
        Empowering you with clarity and support.
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
    </div>
  );
};
