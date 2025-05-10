// import Lottie from "lottie-react";
// import animationData from "../../assets/phone.json";

import { Link } from "react-router-dom";

export const PhoneAnimation = () => {
  const handleLink = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="home-app-intro">
      <h2>Welcome to the Future of Child Health Management</h2>
      <div>
        {/* <Lottie
          loop={true}
          animationData={animationData}
          className="phone-animation"
        /> */}
        <div data-aos="fade-up" className="home-app-inner">
          <h3>Care more. Stress less.</h3>
          <p>
            So many details to remember. Times to calculate. Notes to take.
            People to notify. And they're all so important for your child’s
            health and treatment plans, yet also confusing, overwhelming, and
            time consuming.
            <br />
            <br />
            Whether it's the flu, ADHD, asthma, or anything in between, you can
            safely navigate the sea of data and multitude of tasks.
            <br />
            <br />
            Your child's medicine schedules are managed for you, specifically
            designed for children's medicine tracking.
            <br />
            <br />
            Their symptoms, side effects, vitals, therapies and growth, easily
            tracked, stored and accessed.
            <br />
            <br />
            Their health journey, journaled and saved, providing you and your
            child's healthcare team meaningful insights.
            <br />
            <br />
            Your family, synced and ready to take charge at any time through a
            seamless caregiving management system.
            <br />
            <br />
            And if a new bundle of joy has arrived, their sleep, diapers, and
            feeding (including breastfeeding, pumping, and bottle feeding) are
            conveniently tracked and saved, so you can have everything easily
            accessible in one place.
          </p>

          <Link to="MedicationManagementTools" onClick={handleLink}>
            <button className="cta-btn-home">Explore Our Tools</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
