import LandingImg from "../images/Landing__img.png";
import "../stylesheet/Landing.scss";

const Landing = () => {
  return (
    <>
      <div className="Landing__container">
        <h1 className="Landing__title">
          Teresa Martinez. Front-end developer.
          <span>&#160;</span>
        </h1>
        <img
          src={LandingImg}
          alt="landing_image"
          className="Landing__img"
        ></img>
      </div>
    </>
  );
};

export default Landing;
