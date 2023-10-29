import React, { useState, useEffect } from "react";

const testimonialData = [
  {
    quote:
      "Oncure streamlines managing our child's medication with ease. Its user-friendly interface, reminders, and ability to track multiple medications have simplified our lives, giving us peace of mind.",
    author: "Shane Horton",
    role: "Father Of Two",
  },
  {
    quote:
      "Another testimonial goes here. You can add more testimonials to the array.",
    author: "John Doe",
    role: "Example Role",
  },
  {
    quote:
      " 2 Another testimonial goes here. You can add more testimonials to the array.",
    author: "John Doe",
    role: "Example Role",
  },
  {
    quote:
      " 3 Another testimonial goes here. You can add more testimonials to the array.",
    author: "John Doe",
    role: "Example Role",
  },
];

export function TestimonialSlider() {
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
    }, 7000);

    return () => clearInterval(interval);
  }, [currentTestimonial]);

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
      </div>
      <button className="cta-btn-home">Read More Reviews</button>
    </div>
  );
}
