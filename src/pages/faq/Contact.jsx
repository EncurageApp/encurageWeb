import { GearsAnimation } from "../../components/animations/HelpCenterGearAnimation";
import { SupportAnimation } from "../../components/animations/SupportAnimation";

export const Contact = () => {
  return (
    <main className="contact-page">
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
            <GearsAnimation />

            <button className="cta-btn-home">Contact Support</button>
          </div>
        </div>
      </div>
      <div className="contact-support">
        <p>
          Have any feature requests, general questions, suggestions, or feedback
          you’d like to share?
          <br />
          <br />
          We would love to hear from you.
          <br />
          <br />
          Your valuable input helps us keep improving encurage.
        </p>
        <div className="contact-card">
          <SupportAnimation />
          <button className="cta-btn-home">Chat With Us</button>
        </div>
      </div>
    </main>
  );
};
