import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

//imgs
import Hadas from "../imgs/encurage/hadas.jpg";
import Cayden from "../imgs/encurage/cayden.jpg";
import EmailIcon from "../imgs/encurage/email-icon.png";

//components
import { TimeLine } from "../components/TimeLine";

export const OurStory = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const { pathname, search } = useLocation();
  const canonical = `https://www.encurage.app${pathname}${search}`;

  return (
    <>
      <Helmet>
        <title>Our story | Encurage</title>
        <meta
          name="description"
          content="Learn about our founders and what led them to create Encurage"
        />
        <meta property="og:title" content="Encurage – Child Health Tracker" />
        <meta
          property="og:description"
          content="Learn about our founders and what led them to create Encurage"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
        <meta property="og:url" content="https://encurage.app/OurStory" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Encurage – Child Health & Medication Tracker"
        />
        <meta
          name="twitter:description"
          content="Learn about our founders and what led them to create Encurage"
        />
        <meta
          name="twitter:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="OurStory-page">
        <section className="OurStory-hero">
          <h2>Meet the Founders</h2>
        </section>

        <section className="f-OurStory-container">
          <div>
            <div className="f-OurStory-img-container">
              <div>
                <img
                  src={Hadas}
                  alt="Founder of Company Hadas"
                  width={680}
                  height={510}
                  style={{ objectFit: "cover" }}
                />
                <p className="OurStory-title">
                  ~ Hadas Kanner-Golan, Co-Founder and CEO ~
                </p>
              </div>
            </div>
            <div class="animated-border-quote">
              <blockquote>
                <p>
                  <q>
                    Hi! My name is Hadas. I founded encurage (formerly OnCure)
                    when my daughter Emily had a strep throat and was running a
                    high fever. Struggling to manage her fever reducers safely,
                    I searched for a digital tool that would help with dosing
                    management and care coordination with my husband.
                    <br />
                    <br />
                    There wasn’t a single app that addressed the unique aspects
                    and challenges that parents face when caring for their
                    children at home.
                    <br />
                    <br />
                    Encurage was born when, following this experience, I
                    researched medication errors at home, learned about the
                    scope of the problem, and realized that, like me, other
                    parents needed help too.
                    <br />
                    <br />
                    Starting with core capabilities that provided safe and
                    simple tools for caring for sick children, we gathered
                    invaluable feedback from thousands of parents and
                    caregivers, and evolved into an all-around, innovative
                    digital health app that addresses every family’s unique
                    health journey.
                    <br />
                    <br />I feel fortunate and grateful for being able to
                    continue helping and encuraging parents together with
                    Victor, my co-Founder.
                  </q>
                </p>
                <br />
                <a
                  href="https://www.linkedin.com/in/hadas-kanner-golan-oncureapp/"
                  className="linkedin social"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2xl"
                    color="#2e9593"
                  />
                </a>
              </blockquote>
            </div>
          </div>
          <div>
            <div className="f-OurStory-img-container">
              <div>
                <img
                  src={Cayden}
                  alt="Founder of Company Victor"
                  width={680}
                  height={510}
                  style={{ objectFit: "cover" }}
                />
                <p className="OurStory-title">
                  ~ Victor Horton, Co-Founder and CTO ~
                </p>
              </div>
            </div>
            <div class="animated-border-quote">
              <blockquote>
                <p>
                  <q>
                    Hi! My name is Victor. I am one of the co-Founders of
                    encurage. I helped create this app, inspired by my amazing
                    child, Cayden, who was born with a rare congenital heart
                    condition. Caring for Cayden meant tracking his medications,
                    monitoring various vitals, and managing a complex care
                    schedule—all while balancing life as a parent of four.
                    <br />
                    <br />
                    Initially, I began building an app to address these needs,
                    but life’s demands pulled me away. However, the idea never
                    left me. I knew other families facing similar challenges
                    could benefit from a tool specifically designed to support
                    medically complex journeys.
                    <br />
                    <br />
                    This vision became a reality when I partnered with Hadas,
                    who brought her own experiences and passion for caregiving
                    innovation to the table. Together, we combined insights from
                    our families’ unique stories and created this app to empower
                    other caregivers. It’s a tool born from compassion and
                    determination, designed to help you navigate the challenges
                    of caring for a loved one.
                  </q>
                </p>
                <br />
                <a
                  href="https://www.linkedin.com/in/victorhorton/"
                  className="linkedin social"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2xl"
                    color="#2e9593"
                  />
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
                health needs. We are truly excited about our future plans and
                the path to making this a reality for families worldwide.
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
    </>
  );
};
