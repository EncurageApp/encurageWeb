// Components
import { ChildrenStats } from "../components/ChildrenStats";
import { GooglePlayBtn } from "../components/GooglePlayBtn";
import { AppStoreBtn } from "../components/AppStoreBtn";
import { HealthCollapsible } from "../components/HealthCollapsible";
import { Link } from "react-router-dom";

//Images
import CaregiverIcon1 from "../imgs/icons/caregiver1.png";
import CaregiverIcon2 from "../imgs/icons/caregiver2.png";
import CaregiverIcon3 from "../imgs/icons/caregiver3.png";
import Clipboard from "../imgs/icons/clipboard.png";
import HighFrequency from "../imgs/icons/highfrequency.png";
import YoungChildren from "../imgs/icons/dailylife.png";
import DailyLife from "../imgs/icons/schedule.png";
import BoyIcon from "../imgs/icons/boyicon.png";
import GirlIcon from "../imgs/icons/girlicon.png";

export const ChildrenHealth = () => {
  const handleLink = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="health-page">
      <section className="ch-hero-container">
        <div className="ch-hero-container-img"></div>

        <div className="ch-hero-container-text">
          <h2 data-aos="fade-in" data-aos-delay="500">
            It's Complicated
          </h2>

          <p data-aos="fade-in" data-aos-delay="2000">
            Managing your child’s health involves wearing many hats and taking
            care of multiple tasks every day, year round.
            <br />
            <br />
            There’s a lot to do, remember, calculate, update, and track, and
            there is no time off. It often involves co-management with other
            family members or caregivers; and more than one child means yet more
            responsibilities, with each child having their own specific needs.
            <br />
            <br />
            These are real, valid challenges for every family juggling work,
            daycare, school, and life in general. It shouldn’t come as a
            surprise, then, that medication errors caused by parents and
            caregivers occur in staggering numbers.
          </p>
        </div>
      </section>

      <div className="ch-download-break">
        <p>Download and Explore</p>
        <GooglePlayBtn />
        <AppStoreBtn />
      </div>

      <section className="ch-stats-container">
        <div className="ch-card-wrapper">
          <div className="ch-stats-card">
            <div className="ch-card-icon"></div>
            <div className="ch-card-content">
              <div className="ch-animate-container">
                <ChildrenStats animateNumber={200000} />
                <span data-aos="fade-in">+</span>
              </div>
              <p>medication errors reported by parents yearly</p>
            </div>
          </div>
          <div className="ch-stats-card">
            <div className="ch-card-icon"></div>
            <div className="ch-card-content">
              <div className="ch-card-min">
                <p>Every</p>
                <ChildrenStats animateNumber={8} />
                <p>minutes</p>
              </div>
              <p>- a parent or caregiver in the US makes a medication error</p>
            </div>
          </div>
          <div className="ch-stats-card">
            <div className="ch-card-icon"></div>
            <div className="ch-card-content">
              <div className="ch-animate-container">
                <ChildrenStats animateNumber={50} />
                <span data-aos="fade-in">%</span>
              </div>
              <p>
                of errors related to fever reducers, cough and cold medications
              </p>
            </div>
          </div>
          <div className="ch-stats-card">
            <div className="ch-card-icon"></div>
            <div className="ch-card-content">
              <div className="ch-animate-container">
                <ChildrenStats animateNumber={27} />
                <span data-aos="fade-in">%</span>
              </div>
              <p>of errors related to double dosing</p>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-in" className="ch-revision-text">
        <p>
          These data are some of the findings of Nationwide Children's Hospital
          in Columbus, Ohio, in a research conducted with the National Poison
          Center.
          <br />
          <br />
          <span>Actual numbers are believed to be higher</span>, since the
          findings are based on reported only cases.
          <br />
          <br />
          In December 2021, the American Academy of Pediatrics released the
          policy: Preventing Home Medication Administration Errors, stressing
          the <span>severity of the problem</span> and the
          <span> urgent need for adequate solutions</span> for parents.
        </p>
      </section>

      <section className="ch-image-divider">
        <div></div>
      </section>

      <section className="ch-reason-container">
        <div data-aos="fade-in">
          <h2>What’s Causing This</h2>
          <p>
            A look into some of the main factors mentioned in Nationwide
            Children’s Hospital research, as well as the AAP’s published policy.{" "}
          </p>
        </div>
        <ul>
          <li>
            <HealthCollapsible label="Multiple Caregivers">
              <div className="ch-reason-icon-container">
                <img src={CaregiverIcon1} alt="man icon" width={30} />
                <img src={CaregiverIcon2} alt="grandma icon" width={30} />
                <img src={CaregiverIcon3} alt="grandpa icon" width={30} />
              </div>

              <div>
                <p>
                  The constant back and forth between parents/partners is a
                  major pain point.
                  <br />
                  Add a grandparent, other relative, or a babysitter, and it
                  gets even more challenging.
                </p>
                <Link to="/AppFeatures" onClick={handleLink}>
                  <button className="cta-btn-home">
                    Explore Our Solutions
                  </button>
                </Link>
              </div>
            </HealthCollapsible>
          </li>

          <li>
            <HealthCollapsible label="Experience and Knowhow">
              <img
                className="reason-icons"
                src={DailyLife}
                alt="medicine pill"
              />
              <div>
                <p>
                  Many parents are new to frequent dosing, liquid formulations
                  and unique aspects of children's medicine administration. A
                  multitude of new instructions elevates error rates.
                </p>
                <Link to="/AppFeatures" onClick={handleLink}>
                  <button className="cta-btn-home">
                    Explore Our Solutions
                  </button>
                </Link>
              </div>
            </HealthCollapsible>
          </li>

          <li>
            <HealthCollapsible label="Tiredness and Stress">
              <img className="reason-icons" src={Clipboard} alt="" />
              <div>
                <p>
                  Caring for a sick child through the night. Juggling care with
                  work and other commitments. Worrying for your child's health.
                  Confusion is almost inevitable.
                </p>
                <Link to="/AppFeatures" onClick={handleLink}>
                  <button className="cta-btn-home">
                    Explore Our Solutions
                  </button>
                </Link>
              </div>
            </HealthCollapsible>
          </li>

          <li>
            <HealthCollapsible label="High Frequency of Fever Episodes">
              <img className="reason-icons" src={HighFrequency} alt="" />
              <div>
                <p>
                  It's normal for babies and toddlers 0-3 years old to have
                  fever episodes up to 12 times a year. With so many to go
                  through, errors are more frequent.
                </p>
                <Link to="/AppFeatures" onClick={handleLink}>
                  <button className="cta-btn-home">
                    Explore Our Solutions
                  </button>
                </Link>
              </div>
            </HealthCollapsible>
          </li>
          <li>
            <HealthCollapsible label="More Than One Child in the Family">
              <div>
                <img className="reason-icons" src={BoyIcon} alt="" />
                <img className="reason-icons" src={GirlIcon} alt="" />
              </div>
              <div>
                <p>
                  Having one sick child means, more often than not, that other
                  children in the house will get sick, too. Dosing multiple
                  children at a time elevates the risk for errors.
                </p>
                <Link to="AppFeatures" onClick={handleLink}>
                  <button className="cta-btn-home">
                    Explore Our Solutions
                  </button>
                </Link>
              </div>
            </HealthCollapsible>
          </li>
          <li>
            <HealthCollapsible label="Young Children">
              <img className="reason-icons" src={YoungChildren} alt="" />
              <div>
                <p>
                  Their weight, and as a result their medications’ dosages, keep
                  updating frequently. Parents need to navigate a constantly
                  changing “database”.
                </p>
                <Link to="/AppFeatures" onClick={handleLink}>
                  <button className="cta-btn-home">
                    Explore Our Solutions
                  </button>
                </Link>
              </div>
            </HealthCollapsible>
          </li>
        </ul>
      </section>

      <section data-aos="fade-in" className="ch-links-container">
        <h3>For further reading:</h3>
        <div>
          <a href="https://www.livescience.com/48413-parents-causing-epidemic-of-childrens-medication-overdoses.html">
            Nationwide Children's Hospital Research
          </a>
          <a href="https://publications.aap.org/pediatrics/article/148/6/e2021054666/183379/Preventing-Home-Medication-Administration-Errors">
            AAP Policy
          </a>
        </div>
      </section>
    </main>
  );
};
