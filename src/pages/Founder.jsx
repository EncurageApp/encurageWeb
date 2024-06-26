import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

//imgs
import Hadas from "../imgs/encurage/hadas.jpg";
import EmailIcon from "../imgs/encurage/email-icon.png";

//components
import { TimeLine } from "../components/TimeLine";

export const Founder = () => {
  return (
    <main className="founder-page">
      <section className="founder-hero">
        <h2>Meet the Founders</h2>
      </section>

      <section className="f-founder-container">
        <div>
          <div className="f-founder-img-container">
            <div>
              <img src={Hadas} alt="Founder of Company Hadas" />
              <p className="founder-title">
                {" "}
                ~ Hadas Kanner-Golan, Co-founder and CEO ~{" "}
              </p>
            </div>
          </div>
          <div class="animated-border-quote">
            <blockquote>
              <p>
                <q>
                  Hi! My name is Hadas. I founded encurage (formerly OnCure)
                  when my daughter Emily had a strep throat and was running a
                  high fever. Struggling to manage her fever reducers safely, I
                  searched for a digital tool that would help with dosing
                  management and care coordination with my husband.
                  <br />
                  <br />
                  There wasn’t a single app that addressed the unique aspects
                  and challenges that parents face when caring for their
                  children at home.
                  <br />
                  <br />
                  Encurage was born when, following this experience, I
                  researched medication errors at home, learned about the scope
                  of the problem, and realized that, like me, other parents
                  needed help too.
                  <br />
                  <br />
                  Starting with core capabilities that provided safe and simple
                  tools for caring for sick children, we gathered invaluable
                  feedback from thousands of parents and caregivers, and evolved
                  into an all-around, innovative digital health app that
                  addresses every family’s unique health journey.
                  <br />
                  <br />I feel fortunate and grateful for being able to continue
                  helping and encuraging parents together with Victor, my
                  co-founder.
                </q>
              </p>
              <br />
              <a
                href="https://www.linkedin.com/in/hadas-kanner-golan-oncureapp/"
                className="linkedin social"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2xl" color="#2e9593" />
              </a>
            </blockquote>
          </div>
        </div>
        <div>
          <div className="f-founder-img-container">
            <div>
              <img src={Hadas} alt="Founder of Company Hadas" />
              <p className="founder-title">
                {" "}
                ~ Victor Horton, Co-founder and CTO ~{" "}
              </p>
            </div>
          </div>
          <div class="animated-border-quote">
            <blockquote>
              <p>
                <q>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque dignissimos ipsum magni asperiores ut nisi provident
                  ducimus praesentium aperiam adipisci quasi nihil,
                  reprehenderit, deserunt temporibus aliquid tempore veniam!
                  Magnam unde modi veritatis maxime quibusdam rerum! Officia
                  veritatis ullam doloremque modi!
                </q>
              </p>
              <br />
              <a
                href="https://www.linkedin.com/in/victorhorton/"
                className="linkedin social"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2xl" color="#2e9593" />
              </a>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="f-timeline">
        <TimeLine />
      </section>

      <section className="f-mission-container">
        <div>
          <div>
            <p>
              We are committed to keep evolving encurage, through constant
              research as well as learning from the invaluable feedback of our
              ever growing community of parents and caregivers.
              <br />
              <br />
              Every family deserves the right digital toolkit for their unique
              health needs. We are truly excited about our future plans and the
              path to making this a reality for families worldwide.
              <br />
              <br />
              Join us to get news and updates about encurage, and be a part of
              our journey.
              <br />
              <br />
              <span>
                No spam or fluff - only valuable, helpful information.
              </span>
            </p>
          </div>

          <div className="subscribe-wrapper">
            <div className="subscribe-box">
              <div className="subscribe">
                <img src={EmailIcon} alt="email flying in clouds" />

                <form className="f-email-form">
                  <input
                    className="f-email-bar"
                    type="email"
                    name="Email"
                    placeholder="Enter your email address"
                    autoComplete
                    required
                    checked
                  />
                  <button className="cta-btn-home">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
