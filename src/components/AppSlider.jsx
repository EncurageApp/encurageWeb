import Slider from "react-slick";

export const AppSlider = ({ children }) => {
  return (
    <div>
      <h2>As Needed Wizard</h2>
      <Slider
        className="app-slider"
        dots={true}
        infinite={true}
        speed={500}
        slidesToScroll={1}
        slidesToShow={1}
      >
        {children}
      </Slider>
    </div>
  );
};
