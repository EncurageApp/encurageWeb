import { useState } from "react";

export const CookieSettingsPopup = ({ onClose }) => {
  const [marketingCookiesEnabled, setMarketingCookiesEnabled] = useState(true);
  const [functionalCookiesEnabled, setFunctionalCookiesEnabled] =
    useState(true);
  const [analyticCookiesEnabled, setAnalyticCookiesEnabled] = useState(true);

  const toggleMarketingCookies = () => {
    setMarketingCookiesEnabled(!marketingCookiesEnabled);
  };

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
        <h4>Marketing Cookies</h4>
        <p>Enable cookies for targeted marketing campaigns.</p>
        <label className="switch">
          <input
            type="checkbox"
            checked={marketingCookiesEnabled}
            onChange={toggleMarketingCookies}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="cookie-option">
        <h4>Functional Cookies</h4>
        <p>Enable cookies for additional website functionality.</p>
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
        <h4>Analytic Cookies</h4>
        <p>Enable cookies for website traffic analysis.</p>
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
        Accept
      </button>
    </div>
  );
};
