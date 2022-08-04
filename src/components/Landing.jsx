import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Landing() {
  return (
    <section id="landing">
      <header className="header">
        <div className="header__container">
          <div className="header__title">
            <p className="small__intro text-color">Hello, my name is</p>
            <h1 className="title main__title">Yacoub Haddad</h1>
            <p className="header__para">
              I am a <b className="text-color">Software Engineer </b>
              with a strong passion for developing web applications with great
              user experience, and artificial intelligence.
            </p>
            <div className="socials">
              <a
                href="https://github.com/yacoub33"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-square-github"
                  className="socials_link"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/yacoubhaddad/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-linkedin"
                  className="socials_link"
                />
              </a>
              {/* <a
                href="https://www.linkedin.com/in/yacoubhaddad/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-file"
                  className="socials_link"
                />
              </a> */}
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Landing;
