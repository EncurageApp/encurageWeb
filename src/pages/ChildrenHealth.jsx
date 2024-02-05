// Pictures
import DadTwoKids from "../imgs/dadtwokids.jpg";

// Components
import { HealthSlider } from "../components/HealthSlider";
import { Parallax } from "react-parallax";
import { ChildrenStats } from "../components/ChildrenStats";
import { GooglePlayBtn } from "../components/GooglePlayBtn";
import { AppStoreBtn } from "../components/AppStoreBtn";
import { HealthCollapsible } from "../components/HealthCollapsible";
import { AnimateText } from "../components/AnimateText";

export const ChildrenHealth = () => {
  return (
    <main className="health-page">
      <section className="ch-hero">
        <Parallax strength={500} bgImage={DadTwoKids}>
          <div className="ch-intro">
            <div className="ch-intro-text">
              <AnimateText>
                <h2>Navigating the Numbers,</h2>
                <p>
                  Exploring Children's Medication Errors and How We Are
                  Preventing Them!
                </p>
              </AnimateText>
            </div>
          </div>
        </Parallax>
      </section>

      <section className="ch-stats-container">
        <h2>#'s At A Glance</h2>
        <div className="ch-card-wrapper">
          <div className="ch-stats-card">
            <div className="ch-card-icon"></div>
            <div className="ch-card-content">
              <ChildrenStats animateNumber={300000} />
              <p>
                Incidents happen every year, according to the Poison Controls
                Centers in the United States. 90% of these medication errors
                occur at Home
              </p>
            </div>
          </div>
          <div className="ch-stats-card">
            <div className="ch-card-icon"></div>
            <div className="ch-card-content">
              <ChildrenStats animateNumber={4000} />
              <p>
                Incidents have lead to children omitted to the ICU, with some
                cases becoming fatal
              </p>
            </div>
          </div>
          <div className="ch-stats-card">
            <div className="ch-card-icon"></div>
            <div className="ch-card-content">
              <ChildrenStats animateNumber={20000} />
              <p>
                Parents who have taken the proactive step of downloading
                Encurage app
              </p>
              <div className="ch-download-btn-container">
                <GooglePlayBtn />
                <AppStoreBtn />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ch-reason-container">
        <div>
          <h2>Common Factors That Amplify The Risk </h2>
          <p>
            Understanding the factors that lead to mis-dosage is key to helping
            protect our child from unnecessary risks.
          </p>
        </div>
        <p className="ch-reason-spacer">
          <span>CLICK</span> to explore some common factors that lead to
          mis-dosage and how the Encurage App can transform your approach to
          managing your child's health.
        </p>
        <ul>
          <li>
            <HealthCollapsible label="Multiple Caregivers">
              <h3>Synchronized Care Across Multiple Caregivers</h3>
              <p>
                Encurage simplifies coordination among multiple caregivers.
                Whether it's parents, grandparents, or babysitters, our app
                ensures everyone stays in sync with your child's medication
                schedule. Real-time updates and shared information facilitate
                seamless care, providing a unified approach to your child's
                health
              </p>
            </HealthCollapsible>
          </li>

          <li>
            <HealthCollapsible label="Multiple Children">
              <h3>Effortless Management for Multiple Children</h3>
              <p>
                With Encurage, managing medication for multiple children becomes
                effortless. Tailor individual profiles for each child, track
                their medications separately, and receive personalized reminders
                for each one. Simplify your routine and ensure every child's
                health needs are met without confusion.
              </p>
            </HealthCollapsible>
          </li>

          <li>
            <HealthCollapsible label="Everyday Life">
              <h3>Streamlining Medication amidst Everyday Life</h3>
              <p>
                We understand the demands of modern life. Encurage fits
                seamlessly into your busy schedule, integrating medication
                management into your everyday routine. Whether it's work,
                meetings, or other commitments, our app ensures you never miss a
                medication time, providing convenience and peace of mind.
              </p>
            </HealthCollapsible>
          </li>

          <li>
            <HealthCollapsible label="Experience">
              <h3>Guidance for Novice Medicator's</h3>
              <p>
                Encurage offers guidance and support, especially for those new
                to administering medication to children. Our app provides clear
                instructions, dosage details, and gentle reminders, empowering
                you to confidently navigate this aspect of caregiving, ensuring
                your child's safety and well-being.
              </p>
            </HealthCollapsible>
          </li>
        </ul>
      </section>

      <section className="ch-slider-container">
        <div className="ch-slider-info">
          <h2>Understanding the Impact of Medication Errors</h2>
          <p>
            Dig deeper into the critical facts surrounding medication
            mis-dosages. <span>Explore</span> below to uncover key insights,
            including the frequency of medication errors, types of errors,
            age-related considerations, severity implications, and the common
            medications involved. Knowledge empowers you to safeguard your
            child's health—get informed to prevent errors and ensure accurate
            medication administration.
          </p>
        </div>
        <HealthSlider />
      </section>
    </main>
  );
};
