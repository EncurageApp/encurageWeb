import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: "smooth",
    };

    window.scrollTo(scrollOptions);
  }, [pathname]);

  return null;
}
