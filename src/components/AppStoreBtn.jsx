import ReactGA from "react-ga4";
import { AppStoreButton } from "react-mobile-app-button";

export const AppStoreBtn = () => {
  const handleButtonClick = () => {
    ReactGA.event({
      category: "appStore_apple",
      action: "Clicked App Store button",
    });
  };

  const iOSUrl =
    "https://apps.apple.com/us/app/encurage-formerly-oncure/id1417312275";

  return (
    <div onClick={handleButtonClick} style={{ display: "inline-block" }}>
      <AppStoreButton url={iOSUrl} theme={"dark"} width={190} />
    </div>
  );
};
