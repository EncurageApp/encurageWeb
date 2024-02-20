import React from "react";

export const CookieSettingsPopup = ({ onClose }) => {
  // State variables to track the enabled/disabled status of each type of cookie
  const [marketingCookiesEnabled, setMarketingCookiesEnabled] = useState(true);
  const [functionalCookiesEnabled, setFunctionalCookiesEnabled] =
    useState(true);
  const [analyticCookiesEnabled, setAnalyticCookiesEnabled] = useState(true);

  // Function to handle toggling of marketing cookies
  const toggleMarketingCookies = () => {
    setMarketingCookiesEnabled(!marketingCookiesEnabled);
  };

  // Function to handle toggling of functional cookies
  const toggleFunctionalCookies = () => {
    setFunctionalCookiesEnabled(!functionalCookiesEnabled);
  };

  // Function to handle toggling of analytic cookies
  const toggleAnalyticCookies = () => {
    setAnalyticCookiesEnabled(!analyticCookiesEnabled);
  };

  return (
    <div className="cookie-settings-popup">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <h3>Cookie Settings</h3>
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
    </div>
  );
};
