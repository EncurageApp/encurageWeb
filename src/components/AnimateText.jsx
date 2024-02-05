import React, { useRef, useEffect, useState } from "react";

export const AnimateText = ({ children }) => {
  const textRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    console.log("Intersection:", entry.isIntersecting);
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(textRef.current);

    return () => {
      observer.disconnect();
    };
  });

  const animationClass = isVisible ? "animate-paragraph" : "";

  return (
    <div ref={textRef} className={`animated-paragraph ${animationClass}`}>
      {children}
    </div>
  );
};
