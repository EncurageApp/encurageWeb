import { GooglePlayButton } from "react-mobile-app-button";

export const GooglePlayBtn = () => {
  const APKUrl =
    "https://apps.apple.com/us/app/oncure-medicine-reminder/id1417312275";
  return (
    <div>
      <GooglePlayButton
        url={APKUrl}
        theme={"dark"}
        className="google-play-btn"
      />
    </div>
  );
};
