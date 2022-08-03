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
                LinkedIn
              </a>
            </li>
            <li className="footer__link">
              <a
                href="https://github.com/yacoub33?tab=repositories"
                className="foo__link"
              >
                GitHub
              </a>
            </li>
            <li className="footer__link">
              <a href="/" className="foo__link">
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>Built and Designed by Yacoub Haddad</p>
          <p>All rights reserved. &copy; 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
