import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CardContainer = () => {
  const [visibleCard, setVisibleCard] = useState(null);

  const handleScroll = () => {
    const cardElements = document.querySelectorAll(".card");
    if (cardElements) {
      let anyCardVisible = false;

      cardElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const thresholdMin = 300;
        const thresholdMax = 350;

        const isInViewport =
          rect.top < window.innerHeight - thresholdMax &&
          rect.bottom >= thresholdMin;

        if (isInViewport) {
          setVisibleCard(index + 1);
          anyCardVisible = true;
        }
      });

      if (!anyCardVisible) {
        setVisibleCard(null);
      }
    }
  };

  const handleLink = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="cta-cards-container">
      <div className="card-component-container">
        <div className={`card card-1 ${visibleCard === 1 ? "hovered" : ""}`}>
          <div className="card-info">
            <h2>Taylor Made</h2>
            <p>
              The exact tools you need, with capabilities you will not find
              anywhere else.
            </p>

            <Link to={"MedicationManagementTools"} onClick={handleLink}>
              <button className="cta-btn-home">Explore Our Tools</button>
            </Link>
          </div>
        </div>

        <div className={`card card-2 ${visibleCard === 2 ? "hovered" : ""}`}>
          <div className="card-info">
            <h2>One-Stop Shop</h2>
            <p>
              Every aspect of your child’s health management at home, thoroughly
              addressed.
            </p>

            <Link to={"MedicationManagementTools"} onClick={handleLink}>
              <button className="cta-btn-home">Explore Our Tools</button>
            </Link>
          </div>
        </div>

        <div className={`card card-3 ${visibleCard === 3 ? "hovered" : ""}`}>
          <div className="card-info">
            <h2>Protects Your Family</h2>
            <p>Medication error risks are significantly reduced.</p>

            <Link to={"ChildMedicationManagement"} onClick={handleLink}>
              <button className="cta-btn-home">Medication Error Risks</button>
            </Link>
          </div>
        </div>

        <div className={`card card-4 ${visibleCard === 4 ? "hovered" : ""}`}>
          <div className="card-info">
            <h2>Safe and Reliable</h2>
            <p>
              Nothing is more important than your child. Safety was, and
              continues to be, top of mind throughout development and day-to-day
              monitoring.
            </p>
          </div>
        </div>

        <div className={`card card-5 ${visibleCard === 5 ? "hovered" : ""}`}>
          <div className="card-info">
            <h2>Comprehensive</h2>
            <p>
              A variety of categories, options and variables to fit your child’s
              unique journey.
            </p>

            <Link to={"MedicationManagementTools"} onClick={handleLink}>
              <button className="cta-btn-home">Explore Our Tools</button>
            </Link>
          </div>
        </div>

        <div className={`card card-6 ${visibleCard === 6 ? "hovered" : ""}`}>
          <div className="card-info">
            <h2>Easy to Use</h2>
            <p>A few taps and you’re done, so you can focus on caring.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
