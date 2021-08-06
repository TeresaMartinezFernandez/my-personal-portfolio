// import { Link } from "react-router-dom";
import Header from "./Header";
import "../stylesheet/Contact.scss";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact">
        <nav className="contact__nav">
          <ul className="contact__nav--list">
            <li className="contact__nav--item">
              <a href="mailto:teresamf64@gmail.com">
                <i class="fa fa-envelope fa-3x"></i>
              </a>
            </li>
            <li className="contact__nav--item">
              <a href="http://www.linkedin.com/in/teresamarfer">
                <i class="fab fa-linkedin-in fa-3x"></i>
              </a>
            </li>
            <li className="contact__nav--item">
              <a href="https://github.com/teresamarfer">
                <i class="fab fa-github-alt fa-3x"></i>
              </a>
            </li>
            <li className="contact__nav--item">
              <a href="https://twitter.com/teresamarfer">
                <i class="fab fa-twitter fa-3x"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Contact;
