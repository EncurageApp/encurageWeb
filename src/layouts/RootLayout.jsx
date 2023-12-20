import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

  const handleQuickLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
              <NavLink to={"HelpCenterLayout"} onClick={toggleMenu}>
                Help Center
              </NavLink>
            </ul>
          </nav>
        </header>
      </Headroom>
      <main>
        <ScrollToTop />
      </main>

      <footer>
        <nav>
          <h1 className="logo">
            <NavLink to={"/"}>Encurage</NavLink>
          </h1>
          <ul className="quick-links">
            <NavLink to={"/"} onClick={handleQuickLinkClick}>
              Home
            </NavLink>
            <NavLink to={"ChildrenHealth"} onClick={handleQuickLinkClick}>
              Children's Health
            </NavLink>
            <NavLink to={"AppFeatures"} onClick={handleQuickLinkClick}>
              Explore Our App
            </NavLink>
            <NavLink to={"Founder"} onClick={handleQuickLinkClick}>
              Our Story
            </NavLink>
            <NavLink to={"Reviews"} onClick={handleQuickLinkClick}>
              Reviews
            </NavLink>
            <NavLink to={"HelpCenterLayout"} onClick={handleQuickLinkClick}>
              Help Center
            </NavLink>
          </ul>
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
              <NavLink to="HelpCenterLayout">Terms & Conditions </NavLink>
              <span>|</span>
              <NavLink to="HelpCenterLayout">Privacy Policy</NavLink>
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
