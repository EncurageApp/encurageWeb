import Slider from "react-slick";

export const AppSlider = () => {
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
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
