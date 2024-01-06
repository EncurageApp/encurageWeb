import Slider from "react-slick";

export const AppSlider = ({ children }) => {
  return (
    <div>
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
