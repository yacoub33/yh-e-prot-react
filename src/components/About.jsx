import React from "react";
import ProfilePicture from "../assets/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <sectoin id="about">
      <div className="about__container">
        <div className="about__row">
          <div className="about__title">
            <h1 className="text--center">About Me</h1>
          </div>
          <div className="about__wrapper">
            <div className="about__description">
              <p>
                Hello My name is Yacoub and I enjoy creating things that live on
                the internet. I am a MSc Computer Science student at the
                University of East London currently on placement.
              </p>
              <p>
                An experienced and highly motivated software developer with a
                strong passion for learning new technologies and building
                applications that provide a great user experience. Experienced
                from the tech industry using Java, JavaScript, React.js, HTML,
                and CSS and have demonstrated the ability to work independently
                and produce projects in a team.
              </p>
              <p>
                Some of the technologies I have been working with:
                <div className="tech__list">
                  <ol className="tech__left">
                    <li className="tech__name">
                      <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      Javascript ES6+
                    </li>
                    <li className="tech__name">
                      <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      React.js
                    </li>
                    <li className="tech__name">
                      <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      HTML & CSS
                    </li>
                  </ol>
                  <ul className="tech__right">
                    <li className="tech__name">
                      <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      Java
                    </li>
                    <li className="tech__name">
                      <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      Python
                    </li>
                    <li className="tech__name">
                      <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      SQL
                    </li>
                  </ul>
                </div>
              </p>
            </div>
            <div className="about__img--wrapper">
              <figure>
                <img src={ProfilePicture} alt="" className="img" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </sectoin>
  );
}

export default About;
