import React, { useRef, useEffect, useState } from "react";

export const AnimateText = ({ children }) => {
  const textRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(textRef.current);

    return () => {
      observer.disconnect();
    };
  });

  const animationClass = isVisible ? "animate-paragraph" : "";

  return (
    <p ref={textRef} className={`animated-paragraph ${animationClass}`}>
      {children}
    </p>
  );
};
