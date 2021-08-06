import "../stylesheet/Header.scss";
import { Link } from "react-router-dom";
import logo_tm from "../images/logo_tm.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="header__logo">
            <img
              className="header__logo--img"
              src={logo_tm}
              alt="go_back_to_home"
            ></img>
          </div>
        </Link>
        <nav className="header__nav">
          <ul className="header__nav--list">
            <li className="header__nav--link">
              <Link to="/aboutme">Sobre mi</Link>
            </li>
            <li className="header__nav--link">
              <Link to="/projects">Proyectos</Link>
            </li>
            <li className="header__nav--link">
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
