import { GooglePlayButton } from "react-mobile-app-button";

export const GooglePlayBtn = () => {
  const APKUrl = "https://play.google.com/store/apps/details?id=com.encurage";
  return (
    <div>
      <GooglePlayButton url={APKUrl} theme={"dark"} width={190} />
    </div>
  );
};
