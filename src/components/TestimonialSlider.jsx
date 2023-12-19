import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const testimonialData = [
  {
    quote:
      "Encurage streamlines managing our child's medication with ease. Its user-friendly interface, reminders, and ability to track multiple medications have simplified our lives, giving us peace of mind.",
    author: " Shane Horton",
    role: "Father Of Two",
  },
  {
    quote:
      "As a busy parent, I was constantly worried about our child's medication regimen. Encurage came to our rescue, allowing us to effortlessly add babysitters and grandparents to help with medication tracking. It's a game-changer!",
    author: " Emily Carter",
    role: "Mother of Three",
  },
  {
    quote:
      "Encurage has been a lifesaver for us. Our child has a complex medication schedule, and the app has made it incredibly easy to manage. We can share access with our child's school nurse, making sure everyone is on the same page. Highly recommended!",
    author: " David and Lisa Johnson",
    role: "Parents of Special Needs Child",
  },
  {
    quote:
      "I can't express how grateful we are for Encurage. Our child's medical needs are demanding, and this app has brought much-needed relief. With the ability to easily invite babysitters and grandparents, it has strengthened our support network and improved our child's health management.",
    author: " Michael and Amanda Reynolds",
    role: "Parents of a Toddler",
  },
];

export const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);

      setTimeout(() => {
        const nextIndex = (currentTestimonial + 1) % testimonialData.length;
        setCurrentTestimonial(nextIndex);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTestimonial]);

  const handleLink = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="review-wrapper">
      <div className="review-quote">
        <h1>
          <blockquote>
            <span className={`fade-in-out ${fadeIn ? "active" : ""}`}>
              {testimonialData[currentTestimonial].quote}
            </span>
          </blockquote>
        </h1>
        <h4>
          &mdash;
          <span className={`fade-in-out ${fadeIn ? "active" : ""}`}>
            {testimonialData[currentTestimonial].author}
          </span>
          <br />
          <em className={`fade-in-out ${fadeIn ? "active" : ""}`}>
            {testimonialData[currentTestimonial].role}
          </em>
          <br />
        </h4>
        <div className="review-btn">
          <button className="cta-btn-home">
            <NavLink to="Reviews" onClick={handleLink}>
              Read More Reviews
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
