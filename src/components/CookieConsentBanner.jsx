import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import CookieImg from "../imgs/cookies.png";
import { Link } from "react-router-dom";

export const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showBanner && (
        <CookieConsent
          location="bottom"
          overlay
          overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          buttonText="Accept!"
          cookieName="EnCurage Cookies"
          enableDeclineButton
          declineButtonText="Decline (Optional)"
          flipButtons
          onAccept={() => {
            console.log("User Accepted Cookies");
          }}
          onDecline={() => {
            console.log("User Declined Cookies");
          }}
          style={{
            background: "linear-gradient(#008080,#2e9593,#3fccca)",
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
              This website uses cookies to improve our users' experience. Click
              'Accept' to Help us Out! Questions about Cookies? Visit Our
              Privacy Policy to{" "}
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
