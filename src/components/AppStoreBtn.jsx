import { AppStoreButton } from "react-mobile-app-button";

export const AppStoreBtn = () => {
  const iOSUrl =
    "https://apps.apple.com/us/app/encurage-formerly-oncure/id1417312275";
  return <AppStoreButton url={iOSUrl} theme={"dark"} width={190} />;
};
