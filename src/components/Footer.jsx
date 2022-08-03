import React from "react";
import Resume from "../assets/YH.pdf";

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
              <a
                href="https://www.linkedin.com/in/yacoubhaddad/"
                className="foo__link"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="footer__link">
              <a
                href="https://github.com/yacoub33?tab=repositories"
                className="foo__link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="footer__link">
              <a
                href={Resume}
                className="foo__link"
                target="_blank"
                download
                rel="noreferrer"
              >
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
