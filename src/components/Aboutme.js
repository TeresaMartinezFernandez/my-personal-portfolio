import profileImg from "../images/foto_perfil_bn.jpg";
import "../stylesheet/Aboutme.scss";
import cv_1 from "../sources/CV_spanish.pdf";
import cv_2 from "../sources/CV_english.pdf";
import { Link } from "react-router-dom";
import Header from "./Header";

const AboutMe = () => {
  return (
    <>
      <Header />
      <div className="aboutme__container">
        <fieldset>
          <legend>Sobre mi...</legend>
        </fieldset>
        <img
          src={profileImg}
          alt="foto_perfil_personal"
          className="aboutme__img"
        ></img>

        <h2 className="aboutme__title">Hola, soy Teresa</h2>
        <p className="aboutme__text">
          Os cuento un poco sobre mi, soy Licenciada en Geología, he trabajado
          durante 15 años en sectores muy diversos, consultorías, laboratorios,
          industria alimentaria.<br></br> Hace 6 meses que he decidido apostar
          por un cambio profesional y me he formado como desarrolladora front
          end en el bootcamp de Adalab Digital.
        </p>
        <br></br>
        <p className="aboutme__text">
          Me considero una persona comprometida y metódica, con una actitud
          inconformista, curiosa, resolutiva y entusiasta.
        </p>
        <br></br>
        <p className="aboutme__text">Aquí puedes descargar mi CV.</p>

        <button className="aboutme__btn">
          <a
            href={cv_1}
            className="aboutme__btn--text"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            CV
            <img
              className="aboutme__btn--flag"
              src="https://img.icons8.com/fluency/48/000000/spain-circular.png"
              alt="spanish_flag_image"
            />
          </a>
        </button>
        <button className="aboutme__btn">
          <a
            href={cv_2}
            className="aboutme__btn--text"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            CV
            <img
              className="aboutme__btn--flag"
              src="https://img.icons8.com/fluency/48/000000/great-britain-circular.png"
              alt="uk_flag_image"
            />
          </a>
        </button>
      </div>
    </>
  );
};

export default AboutMe;
