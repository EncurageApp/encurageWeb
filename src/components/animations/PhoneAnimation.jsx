import Lottie from "lottie-react";
import animationData from "../../assets/phone.json";

export const PhoneAnimation = () => {
  return (
    <div className="home-app-intro">
      <h2>Welcome to the Future of Child Health Management</h2>
      <Lottie loop={true} animationData={animationData} />
      <p>
        Our cutting-edge app is here to transform the way you care for your
        child's well-being. Seamlessly manage medications, track health
        milestones, and ensure a healthier tomorrow with ease. Join us on this
        remarkable journey to a world where your child's health is just a tap
        away.
      </p>
    </div>
  );
};
