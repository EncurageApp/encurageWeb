import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";

export const SubscribeBtn = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  // Google Apps Script Webhook URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby_eVmRHKHhkDjOhqhhBMKTxsHrhbviWgTRd1qJHx7acIdu-SEzjPLQJ2x84Xn-cyXV/exec";

  // 🏁 Warm up Google Apps Script on mount
  useEffect(() => {
    fetch(GOOGLE_SCRIPT_URL, { method: "GET", mode: "no-cors" }).catch(
      () => {}
    );
  }, []);

  const handleSubscribeClick = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter a valid email address!");
      return;
    }

    setLoading(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        mode: "no-cors", // 🔥 Fixes CORS issue
      });

      // Instead of checking response.ok, assume it's successful
      setSubscribed(true);
      setEmail("");

      // Ensure Google Analytics is loaded before logging event
      if (window.gtag) {
        ReactGA.event({
          category: "email_subscribed",
          action: "Clicked Email Subscribe button",
        });
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="sub-btn-container">
      <form
        className={`subscription ${subscribed ? "done" : ""}`}
        onSubmit={handleSubscribeClick}
      >
        <input
          className="add-email"
          type="email"
          placeholder="subscribe@me.now"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="submit-email"
          type="submit"
          disabled={loading || subscribed}
        >
          {!loading ? (
            <>
              <span className="before-submit">
                {subscribed ? "Subscribed!" : "Subscribe"}
              </span>
              <span className="after-submit">Thank you for subscribing!</span>
            </>
          ) : (
            <span>Loading...</span>
          )}
        </button>
      </form>
    </div>
  );
};
