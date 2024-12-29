import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Headroom from "react-headroom";
import AOS from "aos";
import "aos/dist/aos.css";

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
import ScrollToTop from "react-scroll-to-top";

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

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 800,
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div className="root-layout">
      <Headroom disableInlineStyles upTolerance={50} downTolerance={50}>
        <header>
          <nav>
            <div className="nav-header">
              <div className="nav-logo-download-container">
                <NavLink to={"/"} onClick={handleQuickLinkClick}>
                  <div className="logo-container">
                    <img src={Elogo2} alt="cup of pink medicine" />
                    <img src={Elogo} alt="encurage" />
                  </div>
                </NavLink>
                <div className="nav-download-container-full">
                  <GooglePlayBtn />
                  <AppStoreBtn />
                </div>
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
            <div className="nav-download-container-mid">
              <h3>Download and Join Today!</h3>
              <div>
                <GooglePlayBtn />
                <AppStoreBtn />
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
                Challenges & Risks
              </NavLink>
              <NavLink to={"AppFeatures"} onClick={handleQuickLinkClick}>
                Explore Encurage
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
              <div className="nav-download-container">
                <h3>Download and Join Today!</h3>
                <GooglePlayBtn />
                <AppStoreBtn />
              </div>
            </ul>
          </nav>
          <div className="nav-download-container-small">
            <GooglePlayBtn />
            <AppStoreBtn />
          </div>
        </header>
      </Headroom>

      <main>
        <Outlet />
        <CookieConsentBanner />
        {loading && <LoaderAnimation />}
        <ScrollToTop smooth style={{ zIndex: 99 }} />
      </main>

      <footer>
        <nav>
          <div className="logo-container-footer">
            <img src={Elogo2} alt="cup of pink medicine" />
            <img src={Elogo} alt="encurage" />
          </div>
          <div className="download-btn-container">
            <GooglePlayBtn />
            <AppStoreBtn />
          </div>
          <ul className="quick-links">
            <NavLink to={"/"} onClick={handleQuickLinkClick}>
              Home
            </NavLink>
            <NavLink to={"ChildrenHealth"} onClick={handleQuickLinkClick}>
              Challenges & Risks
            </NavLink>
            <NavLink to={"AppFeatures"} onClick={handleQuickLinkClick}>
              Explore Encurage
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
            <h3>Join our community and get our news and updates!</h3>
            <div>
              <SubscribeBtn />
            </div>
          </div>

          <div className="copyright">
            <p>
              &#169; Copyright 2024 Myrtus Enterprises LLC. All rights reserved.
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
