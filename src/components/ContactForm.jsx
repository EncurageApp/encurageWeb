import emailjs from "emailjs-com";
import { useState } from "react";

export const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_6wythvo";
    const templateID = "template_78imrxc";
    const userID = "OP9s9s4CNaoyWMibg";

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        userID
      )
      .then((response) => {
        console.log("Email sent!", response);
        setResponseMessage("Thank you for your message!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setResponseMessage("Sorry! Please try to send your message again.");
      });
  };

  return (
    <div className="contact-form-container">
      {responseMessage && (
        <div className="response-message">{responseMessage}</div>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="label">
          Name
        </label>
        <input type="text" id="name" name="name" className="input" required />

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="input"
          required
        />

        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="textarea"
          required
        ></textarea>

        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  );
};
