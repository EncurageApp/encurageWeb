import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "../css/NavBars.css";

export const SocialMediaIcons = () => {
  const [iconSize, setIconSize] = useState("lg");

  const updateIconSize = () => {
    if (window.innerWidth > 1100) {
      setIconSize("2xl");
    } else {
      setIconSize("xl");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateIconSize);

    return () => {
      window.removeEventListener("resize", updateIconSize);
    };
  }, []);

  return (
    <div className="icons-container">
      <h3>Get in Touch With Us!</h3>
      <div className="icons">
        <a
          href="https://www.facebook.com/oncureapp/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size={iconSize} />
        </a>
        <a
          href="https://www.instagram.com/encurage_app/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size={iconSize} />
        </a>
        <a
          href="https://www.linkedin.com/company/oncure/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
        </a>
      </div>
    </div>
  );
};
