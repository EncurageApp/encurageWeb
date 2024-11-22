import { useState } from "react";

export const CookieSettingsPopup = ({ onClose }) => {
  const [functionalCookiesEnabled, setFunctionalCookiesEnabled] =
    useState(true);
  const [analyticCookiesEnabled, setAnalyticCookiesEnabled] = useState(true);

  const toggleFunctionalCookies = () => {
    setFunctionalCookiesEnabled(!functionalCookiesEnabled);
  };

  const toggleAnalyticCookies = () => {
    setAnalyticCookiesEnabled(!analyticCookiesEnabled);
  };

  return (
    <div className="cookie-settings-popup">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <h3>Advanced Cookie Settings</h3>
      <div className="cookie-option">
        <h4>Necessary</h4>
        <p>
          Enabling basic essential functionalities.
          <span> (Always Active)</span>
        </p>
      </div>
      <div className="cookie-option">
        <h4>Functional</h4>
        <p>Enabling additional website functionalities.</p>
        <label className="switch">
          <input
            type="checkbox"
            checked={functionalCookiesEnabled}
            onChange={toggleFunctionalCookies}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="cookie-option">
        <h4>Analytic</h4>
        <p>
          Helping us understand how visitors interact with the website, and
          provide metrics that contribute to overall improvement of visitors’
          experience.
        </p>
        <label className="switch">
          <input
            type="checkbox"
            checked={analyticCookiesEnabled}
            onChange={toggleAnalyticCookies}
          />
          <span className="slider round"></span>
        </label>
      </div>

      <button className="accept-button" onClick={onClose}>
        Save My Preferences
      </button>
    </div>
  );
};
