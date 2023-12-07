import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "../css/NavBars.css";

export const SocialMediaIcons = () => {
  const [iconSize, setIconSize] = useState("lg");

  const updateIconSize = () => {
    if (window.innerWidth > 1100) {
      setIconSize("xl");
    } else {
      setIconSize("lg");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateIconSize);

    return () => {
      window.removeEventListener("resize", updateIconSize);
    };
  }, []);

  return (
    <div className="icons">
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size={iconSize} />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size={iconSize} />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size={iconSize} />
      </a>
    </div>
  );
};
