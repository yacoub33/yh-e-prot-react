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
                the internet. I am currently a MSc Computer Science student at
                the University of East London.
              </p>
              <p>
                I have experience from the tech industry working with JavaScript
                and have demonstrated my ability to work independently and
                produce projects in a team. My studies provided me with a good
                foundational knowledge of Data Structures and Algorithms and
                helped me think and solve problems like a programmer.
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
