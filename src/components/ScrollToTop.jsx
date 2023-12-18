import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { LoaderAnimation } from "./animations/LoaderAnimation";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleNavLinkClick = () => {
      setIsLoading(true); // Activate loading icon

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
          setIsLoading(false); // Deactivate loading icon after transition
        }, 3000); // Adjust the timing based on your transition duration
      };

      setTimeout(scrollToTop, 500); // Adding a slight delay for the scroll to allow the fade-out effect to be visible
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
