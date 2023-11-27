import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Headroom from "react-headroom";

// Components
import { ScrollToTop } from "../components/ScrollToTop";
import { SubscribeBtn } from "../components/SubscribeBtn";
import { GooglePlayBtn } from "../components/GooglePlayBtn";
import { AppStoreBtn } from "../components/AppStoreBtn";
import { SocialMediaIcons } from "../components/SocialMediaIcons";

export const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="root-layout">
      <Headroom disableInlineStyles upTolerance={15} downTolerance={20}>
        <header>
          <nav>
            <div className="nav-header">
              <h1 className="logo">
                <NavLink to={"/"}>Encurage</NavLink>
              </h1>
              <div
                className={`menu-icon ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <ul className={`navlinks ${isMenuOpen ? "open" : ""}`}>
              <NavLink to={"/"} onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink to={"ChildrenHealth"} onClick={toggleMenu}>
                Children's Health
              </NavLink>
              <NavLink to={"AppFeatures"} onClick={toggleMenu}>
                Explore Our App
              </NavLink>
              <NavLink to={"Founder"} onClick={toggleMenu}>
                Our Story
              </NavLink>
              <NavLink to={"Reviews"} onClick={toggleMenu}>
                Reviews
              </NavLink>
              <NavLink to={"FaqLayout"} onClick={toggleMenu}>
                Contact Us
              </NavLink>
            </ul>
          </nav>
        </header>
      </Headroom>
      <main>
        <ScrollToTop />
        <Outlet />
      </main>

      <footer>
        <nav>
          <h1 className="logo">
            <NavLink to={"/"}>Encurage</NavLink>
          </h1>
          <div className="quick-links">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"ChildrenHealth"}>Children's Health</NavLink>
            <NavLink to={"AppFeatures"}>Explore Our App</NavLink>
            <NavLink to={"Founder"}>Our Story</NavLink>
            <NavLink to={"Reviews"}>Reviews</NavLink>
            <NavLink to={"FaqLayout"}>Contact Us</NavLink>
          </div>
          <div className="subscribe-btn-container">
            <h2>Get All The Latest News!</h2>
            <div>
              <SubscribeBtn />
            </div>
          </div>
          <div className="download-btn-container">
            <GooglePlayBtn />
            <AppStoreBtn />
          </div>
          <span className="footer-bar"></span>
          <div className="copyright">
            <p>
              &#169; Copyright 2023 Myrtus Enterprises LLC. All rights reserved.
            </p>
            <div className="terms-privacy">
              <NavLink to={"Terms"}>Terms & Conditions </NavLink>
              <span>|</span>
              <NavLink to={"Privacy"}> Privacy Policy</NavLink>
            </div>
          </div>
          <div className="social-icons">
            <SocialMediaIcons />
          </div>
        </nav>
      </footer>
    </div>
  );
};
