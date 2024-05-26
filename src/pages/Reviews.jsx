import { AppStoreButton, GooglePlayButton } from "react-mobile-app-button";
import { AppStoreBtn } from "../components/AppStoreBtn";
import { GooglePlayBtn } from "../components/GooglePlayBtn";

//Icons
import Icon1 from "../imgs/icons/reviewIcon1.png";
import Icon2 from "../imgs/icons/reviewIcon2.png";
import Icon3 from "../imgs/icons/reviewIcon3.png";
import Icon4 from "../imgs/icons/reviewIcon4.png";
import Icon5 from "../imgs/icons/reviewIcon5.png";
import Icon6 from "../imgs/icons/reviewIcon6.png";
import Icon7 from "../imgs/icons/reviewIcon7.png";

export const Reviews = () => {
  return (
    <main className="review-page">
      <section className="review-hero-container">
        <div className="review-hero-container-img"></div>
        <div className="review-hero-container-text">
          <h2 data-aos="fade-in" data-aos-delay="500">
            Real reviews from parents like you
          </h2>
          <p data-aos="fade-in" data-aos-delay="2000">
            Experiences shared by parents on the App Store that
            <span> every family can identify with. </span>
          </p>
        </div>
      </section>

      <section className="review-container">
        <div data-aos="fade-right" className="review-box box-1">
          <img
            src={Icon1}
            height={160}
            alt="two children swinging on wooden swing"
            className="reviewIcon"
          />
          <div className="review-text">
            <p>
              "As a mom of 5 it’s tricky to keep track everyone’s
              meds/dose/times needed. This app is a lifesaver for tracking all
              the little details as well as symptoms. I would definitely
              recommend it to anyone with multiple kiddos!"
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="review-box box-2">
          <img
            src={Icon2}
            height={160}
            alt="two children swinging on wooden swing"
            className="reviewIcon"
          />
          <div className="review-text">
            <p>
              "I love this app. I have two kids who are sick and as a single mom
              it’s not easy remembering everything. This app is good for
              documenting".
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="review-box box-3">
          <img
            src={Icon3}
            height={160}
            alt="two children swinging on wooden swing"
            className="reviewIcon"
          />
          <div className="review-text">
            <p>
              "My 8 year old just had surgery and was on Tylenol/Advil
              alternating. This app not only figured out the schedule and
              adjusted if he got a dose late due to a nap, but it was simple to
              use and keep track of everything. Recommending it to all my
              friends!"
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="review-box box-4">
          <img
            src={Icon4}
            height={160}
            alt="two children swinging on wooden swing"
            className="reviewIcon"
          />
          <div className="review-text">
            <p>
              "My entire family (6 people) have Covid-19 at the same time, and
              this has been a lifesaver for a sick mom trying to keep up with
              everyone’s medicine schedules."
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="review-box box-5">
          <img
            src={Icon5}
            height={160}
            alt="two children swinging on wooden swing"
            className="reviewIcon"
          />
          <div className="review-text">
            <p>
              "I have 3 sick kids right now, all different ages and weights. We
              are in the midst of stressful thanksgiving cross country travel
              trying to get home while all being ill. I was having the HARDEST
              time keeping track of what time I have each kid their last dose of
              medicine. This app has helped our family SO MUCH. Thank you for
              making something to help simplify a stressful time for our family.
              I like the app's layout and being able to track my children’s
              medicines and when they took them. It’s very functional and easy
              to use".
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="review-box box-6">
          <img
            src={Icon6}
            height={160}
            alt="two children swinging on wooden swing"
            className="reviewIcon"
          />
          <div className="review-text">
            <p>
              "I’ve tried a lot of medicine apps. This one is the first that
              takes the guess work out of what, how much and when! I ran into a
              few issues which were quickly met with a very fast response via
              email I’ve recommended this app to several moms and will continue
              to".
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="review-box box-7">
          <img
            src={Icon7}
            height={160}
            alt="two children swinging on wooden swing"
            className="reviewIcon"
          />
          <div className="review-text">
            <p>
              "If you have any children or people you are caring for and/or have
              a spouse or other caregiver who wants/needs to stay up to date,
              especially during illness and need to stay on track, you need
              this. Every parent needs this app!".
            </p>
          </div>
        </div>
      </section>

      <div className="ch-download-break">
        <p>Download and Explore</p>
        <GooglePlayBtn />
        <AppStoreBtn />
      </div>

      <section className="review-info">
        <p>
          <span>Your feedback means the world to us.</span>
          <br />
          <br />
          <span>Parents’ suggestions and insights</span> are one of the main
          building blocks in the process of developing
          <span> solutions that work for you.</span>
        </p>
        <p>
          Have any feature requests, general questions, suggestions, or feedback
          you’d like to share? We would love to hear from you. Your valuable
          input helps us keep improving encurage.
        </p>
        <div className="review-email">
          <a href="mailto:hello@encurage.app">
            Waiting to hear from you at: <span>hello@encurage.app</span>
          </a>
        </div>
        <p>
          Help more parents learn about encurage.
          <br />
          <br />
          You can easily submit an app review here:
        </p>
      </section>

      <section className="review-links">
        <div className="ch-download-break">
          <p>Share your Story</p>
          <GooglePlayButton
            url="https://apps.apple.com/us/app/oncure-medicine-reminder/id1417312275"
            theme={"dark"}
            width={190}
          />
          <AppStoreButton
            url="https://apps.apple.com/us/app/oncure-medicine-reminder/id1417312275"
            theme={"dark"}
            width={190}
          />
        </div>
      </section>
    </main>
  );
};
