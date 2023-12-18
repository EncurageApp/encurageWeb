import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { LoaderAnimation } from "./animations/LoaderAnimation";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleNavLinkClick = () => {
      setIsLoading(true);

      const outletContent = document.querySelector(".outlet-content");
      outletContent.style.transition = "opacity .1s ease";
      outletContent.style.opacity = 0;

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        setTimeout(() => {
          outletContent.style.opacity = 1;
          setIsLoading(false);
        }, 3000);
      };

      setTimeout(scrollToTop, 500);
    };

    const navLinks = document.querySelectorAll("ul.navlinks a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="loading-icon">
          <LoaderAnimation />
        </div>
      )}
      <div className="outlet-content">
        <Outlet />
      </div>
    </>
  );
}
