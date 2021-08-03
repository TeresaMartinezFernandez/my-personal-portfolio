import "../stylesheet/Header.scss";
import logo_tm from "../images/logo_tm.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img
            className="header__logo--img"
            src={logo_tm}
            alt="personal_icon_image"
          ></img>
        </div>
        <nav className="header__nav">
          <ul className="header__nav--list">
            <li className="header__nav--item">
              <a
                className="header__nav--link"
                href="https://twitter.com/teresamarfer"
              >
                Sobre mi
              </a>
            </li>
            <li className="header__nav--item">
              <a
                className="header__nav--link"
                href="https://twitter.com/teresamarfer"
              >
                Proyectos
              </a>
            </li>
            <li className="header__nav--item">
              <a
                className="header__nav--link"
                href="https://twitter.com/teresamarfer"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
