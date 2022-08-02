import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer__container">
        <figure>
          <div className="logo">
            <h1>YH</h1>
          </div>
        </figure>
        <div className="footer__links--container">
          <ul className="footer__links">
            <li className="footer__link">
              <a href="/" className="foo__link">
                Home
              </a>
            </li>
            <li className="footer__link">
              <a href="/" className="foo__link">
                Contact v
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>Made and Designed by Yacoub Haddad</p>
          <p>Copyright &copy; 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
