import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          </div>
        </div>
      </header>
    </section>
  );
}

export default Landing;
