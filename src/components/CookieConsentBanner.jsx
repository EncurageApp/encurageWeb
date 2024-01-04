import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import Cookie from "../imgs/cookies.png";
import { Link } from "react-router-dom";

export const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 5000); // 10 seconds in milliseconds

    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      {showBanner && (
        <CookieConsent
          debug={true}
          location="bottom"
          overlay
          overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          buttonText="Accept!"
          cookieName="EnCurage Cookies"
          enableDeclineButton
          declineButtonText="Decline (Optional)"
          flipButtons
          style={{
            fontSize: ".8rem",
            background: "#2e9593",
            justifyContent: "center",
            textAlign: "center",
          }}
          buttonStyle={{ background: "#d8eeed", fontSize: ".8rem" }}
          declineButtonStyle={{ background: "#284747", fontSize: ".8rem" }}
        >
          <h3
            style={{
              paddingBottom: "15px",
              borderBottom: ".3px solid white",
              maxWidth: "400px",
              fontSize: "1.3rem",
            }}
          >
            Cookie Policy
          </h3>

          <div>
            <img
              src={Cookie}
              alt="cookie in a web browser"
              style={{ width: "50px", marginTop: "10px" }}
            />
            <p
              style={{
                maxWidth: "400px",
                fontSize: ".8rem",
                borderBottom: "0.3px solid white",
                padding: "10px 0",
              }}
            >
              This website uses cookies to improve our users' experience. Click
              'Accept' to Help us Out! Questions about Cookies?{" "}
              <Link to="/HelpCenterLayout" className="cookie-btn">
                Learn More
              </Link>
            </p>
          </div>
        </CookieConsent>
      )}
    </>
  );
};
