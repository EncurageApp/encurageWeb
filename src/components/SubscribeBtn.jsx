import React, { useState } from "react";

export const SubscribeBtn = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribeClick = () => {
    setSubscribed(true);
  };

  return (
    <div className="sub-btn-container">
      <form className={`subscription ${subscribed ? "done" : ""}`}>
        <input
          className="add-email"
          type="email"
          placeholder="subscribe@me.now"
        />
        <button
          className="submit-email"
          type="button"
          onClick={handleSubscribeClick}
        >
          <span className="before-submit">Subscribe</span>
          <span className="after-submit">Thank you for subscribing!</span>
        </button>
      </form>
    </div>
  );
};
