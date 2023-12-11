import React from "react";
import { ContactForm } from "../../components/ContactForm";
import { EmailAnimation } from "../../components/animations/EmailAnimation";

export const Contact = () => {
  return (
    <main className="contact-page">
      <div>
        <h1>Get In Touch</h1>
        <p>
          Whether you need technical support, want to share your feedback or
          reviews, or have any concerns, we're here to assist you. Reach out to
          our team via the email form located below, and we'll do our best to
          address your inquiries promptly. Your input helps us improve our
          service and better cater to your needs.
        </p>
      </div>
      <div className="contact-container">
        <EmailAnimation />
        <ContactForm />
      </div>
    </main>
  );
};
