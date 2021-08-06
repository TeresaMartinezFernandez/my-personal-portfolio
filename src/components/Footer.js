import "../stylesheet/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box">
        <small className="footer__box--copy">
          made with <i class="fa fa-heart" aria-hidden="true"></i> by
          teresamarfer
        </small>
        <small className="footer__box--copy">
          <i class="fa fa-copyright" aria-hidden="true"></i> 2021
        </small>
      </div>
    </footer>
  );
};

export default Footer;
