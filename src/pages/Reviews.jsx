import React from "react";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { AnimateText } from "../components/AnimateText";
import { ReviewCube } from "../components/ReviewCube";
import { GooglePlayBtn } from "../components/GooglePlayBtn";
import { AppStoreBtn } from "../components/AppStoreBtn";

export const Reviews = () => {
  return (
    <main className="review-page">
      <section className="review-hero">
        <AnimateText>
          <div className="review-intro-text">
            <h2>See What Everyone's Saying</h2>
            <p>
              Every story matters, and we're here to listen. Share your journey
              with us and Discover other families experiences with Encurage!
            </p>
          </div>
        </AnimateText>
      </section>

      <section className="review-cube-container">
        <h2>See What Our User's Are Saying!</h2>
        <ReviewCube />
      </section>

      <section className="full-testimonial-container">
        <div className="full-testimonial">
          <div className="shadow"></div>
          <span className="top border"></span>
          <h1>I Love This App!</h1>
          <p>
            I have two kids who are sick and as a busy mom it’s not easy
            remembering everything. This app is perfect for documenting and
            helping me stay ahead!
          </p>
          <p className="source">&mdash; Adrianna Embry</p>
          <span className="bottom border"></span>
        </div>
      </section>

      <section>
        <TestimonialCarousel />
      </section>

      <section className="review-download-container">
        <div className="review-download-intro">
          <h2>We Value Your Experience</h2>
          <p>
            At Encurage, we deeply care about what our users think. Your
            feedback is invaluable to us, as it helps us continually improve and
            provide the best experience for you and your loved ones. We would
            love to hear about your journey with Encurage – your thoughts,
            successes, and any suggestions you may have.
          </p>
          <p>
            Sharing your story is easy! Visit our{" "}
            <span className="review-download-span">
              <a href="https://apps.apple.com/us/app/oncure-medicine-reminder/id1417312275">
                App Download Page
              </a>
            </span>
            below to leave a review!
          </p>
        </div>
        <div className="review-download-btns">
          <GooglePlayBtn />
          <AppStoreBtn />
        </div>
      </section>
    </main>
  );
};
