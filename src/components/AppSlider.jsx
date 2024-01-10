import Slider from "react-slick";

export const AppSlider = ({ children }) => {
  return (
    <div className="app-slider-container">
      <Slider
        className="app-slider"
        adaptiveHeight={true}
        centerMode={true}
        dots={true}
      >
        {children}
      </Slider>
    </div>
  );
};
