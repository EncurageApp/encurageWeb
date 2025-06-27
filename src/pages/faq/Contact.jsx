import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { IoMdChatbubbles } from "react-icons/io";

export const Contact = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const { pathname, search } = useLocation();
  const canonical = `https://www.encurage.app${pathname}${search}`;

  return (
    <>
      <Helmet>
        <title>Contact us | Encurage</title>
        <meta name="description" content="Contact us" />
        <meta property="og:title" content="Encurage – Child Health Tracker" />
        <meta property="og:description" content="Contact us" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
        <meta
          property="og:url"
          content="https://encurage.app/helpcenter/Contact"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Encurage – Child Health & Medication Tracker"
        />
        <meta name="twitter:description" content="Contact us" />
        <meta
          name="twitter:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />
      </Helmet>
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
    </>
  );
};
