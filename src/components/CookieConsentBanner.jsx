import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import CookieImg from "../imgs/encurage/cookies.png";
import { Link } from "react-router-dom";
import { CookieSettingsPopup } from "./CookieSettingsPopup";

export const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  const handleLinkClick = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <CookieConsent
          location="bottom"
          overlay
          overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          buttonText="Accept All"
          cookieName="EnCurage Cookies"
          enableDeclineButton
          declineButtonText="Manage Cookie Preferences"
          flipButtons
          onAccept={() => {
            console.log("User Accepted Cookies");
          }}
          onDecline={handleSettingsClick}
          style={{
            background: "#008080",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          buttonStyle={{
            background: "#d8eeed",
            fontSize: "1rem",
            borderRadius: "10px",
            padding: ".5rem 1rem",
          }}
          declineButtonStyle={{
            background: "#284747",
            fontSize: "1rem",
            borderRadius: "10px",
            padding: ".5rem 1rem",
          }}
          buttonWrapperClasses="cookie-btn-container"
        >
          <h3
            style={{
              paddingBottom: "15px",
              borderBottom: ".3px solid white",
              maxWidth: "800px",
              fontSize: "1.3rem",
              margin: "0 auto",
            }}
          >
            Cookie Policy
          </h3>

          <div>
            <img
              src={CookieImg}
              alt="cookie in a web browser"
              style={{ width: "100px", marginTop: "30px" }}
            />
            <p
              style={{
                maxWidth: "800px",
                fontSize: ".9rem",
                borderBottom: "0.3px solid white",
                padding: "2rem",
                margin: "0 auto",
              }}
            >
              We use cookies to enable core functionalities of this website, and
              improve your browsing experience. Some cookies are essential to
              maintain basic functionality, and are listed as “necessary”. You
              can manage your preferences for other types of cookies by tapping
              the “manage cookie preferences” button below. Visit our
              <Link
                to="/HelpCenterLayout"
                className="cookie-btn"
                onClick={handleLinkClick}
              >
                Privacy Policy
              </Link>
              to learn more.
            </p>
          </div>
        </CookieConsent>
      )}
      {showSettings && (
        <>
          <div className="overlay"></div>
          <CookieSettingsPopup onClose={handleCloseSettings} />
        </>
      )}
    </>
  );
};
