import { useEffect } from "react";
import ReactGA from "react-ga4";
import { IoMdSettings } from "react-icons/io";
import { IoMdChatbubbles } from "react-icons/io";

export const Contact = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <main className="contact-page">
      <div className="contact-inner">
        <div className="tech-support">
          <p>
            Using Encurage and need technical support, or additional help?
            <br />
            <br />
            Reach out to our support team, with extended-hours availability.
            <br />
            <br />
            You can contact us right here, or directly from your profile.
          </p>
          <div>
            <div className="contact-card">
              <IoMdSettings size={50} style={{ color: "#008080" }} />
              <br />
              <button className="cta-btn-home">
                <a href="mailto:support@encurage.app">Contact Support</a>
              </button>
            </div>
          </div>
        </div>
        <div className="contact-support">
          <p>
            Have any feature requests, general questions, suggestions, or
            feedback you’d like to share?
            <br />
            <br />
            We would love to hear from you.
            <br />
            <br />
            Your valuable input helps us keep improving encurage.
          </p>
          <div className="contact-card">
            <IoMdChatbubbles size={50} style={{ color: "#008080" }} />
            <br />
            <button className="cta-btn-home">
              <a href="mailto:hello@encurage.app">Chat With Us</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
