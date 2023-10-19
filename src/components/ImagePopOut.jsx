import BackGround from "../imgs/background-person.jpg";
import Hadas from "../imgs/founder-hadas.png";

export const ImagePopOut = () => {
  return (
    <div className="person">
      <div className="person-container">
        <img className="person-circle" src={BackGround} alt="" />
        <img className="person-img" src={Hadas} alt="Hadas and daughter" />\
      </div>
    </div>
  );
};
