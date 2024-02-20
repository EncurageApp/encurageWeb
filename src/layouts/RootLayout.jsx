import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Headroom from "react-headroom";

// Components
import { SubscribeBtn } from "../components/SubscribeBtn";
import { GooglePlayBtn } from "../components/GooglePlayBtn";
import { AppStoreBtn } from "../components/AppStoreBtn";
import { SocialMediaIcons } from "../components/SocialMediaIcons";
import { CookieConsentBanner } from "../components/CookieConsentBanner";
import { LoaderAnimation } from "../components/animations/LoaderAnimation";

//Imgs
import Elogo from "../imgs/figmaImgs/encurage.png";
import Elogo2 from "../imgs/figmaImgs/Layer_1.png";

export const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleQuickLinkClick = () => {
    setLoading(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="root-layout">
      <Headroom disableInlineStyles upTolerance={15} downTolerance={20}>
        <header>
          <nav>
            <div className="nav-header">
              <div className="logo-container">
                <img src={Elogo} alt="encurage" />
              </div>
              <div
                className={`menu-icon ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <ul
              className={`navlinks ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
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
          </nav>
        </header>
      </Headroom>
      <main>
        <Outlet />
        <CookieConsentBanner />
        {loading && <LoaderAnimation />}
      </main>

      <footer>
        <nav>
          <div className="logo-container">
            <img src={Elogo} alt="encurage" />
          </div>
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
