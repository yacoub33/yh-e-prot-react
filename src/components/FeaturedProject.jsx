import React from "react";
import featuredImg from "../assets/blinker mockup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FeaturedProject({ title, languages, description }) {
  return (
    <section id="featured__proj">
      <div className="container">
        <div className="row">
          <h1 className="text--center section__title">
            <span className="text-color">Featured </span> Project{" "}
          </h1>
        </div>
      </div>
      <div className="featured__container">
        <li class="featured__project">
          <div class="featured__project__wrapper">
            <img src={featuredImg} alt="" className="project__img" />
            <div class="project__wrapper--bg"></div>
            <div class="project__description">
              <h3 class="project__description--title">{title}</h3>
              <p class="project__description--para">{description}</p>
              <h4 class="project__description--sub-title tech__font">
                {languages}
              </h4>
              <div class="project__description--links">
                <a href="/" class="project__description--link" rel="noreferrer">
                  <FontAwesomeIcon icon="fa-solid fa-file" />
                </a>
                <a
                  href="https://github.com/yacoub33/e-com-react"
                  class="project__description--link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon="fa-solid fa-link" />
                </a>
              </div>
            </div>
          </div>
        </li>
      </div>
    </section>
  );
}

export default FeaturedProject;
