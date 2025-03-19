import ReactGA from "react-ga4";
import { GooglePlayButton } from "react-mobile-app-button";

export const GooglePlayBtn = () => {
  const handleButtonClick = () => {
    ReactGA.event({
      category: "appStore_google",
      action: "Clicked Google Play button",
    });
  };

  const APKUrl = "https://play.google.com/store/apps/details?id=com.encurage";

  return (
    <div onClick={handleButtonClick} style={{ display: "inline-block" }}>
      <GooglePlayButton url={APKUrl} theme={"dark"} width={190} />
    </div>
  );
};
