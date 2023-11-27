import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const FaqLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vel.
      </p>

      <nav>
        <NavLink to="Contact">Contact Us</NavLink>
        <NavLink to="Faq">View the Faq's</NavLink>
        <NavLink to="Terms">Terms & Conditions</NavLink>
        <NavLink to="Privacy">Privacy Policy</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};
