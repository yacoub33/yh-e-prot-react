import React from "react";
import featuredImg from "../assets/blinker mockup.png";

function FeaturedProject({ title, languages, description }) {
  return (
    <section id="featured__proj">
      <div className="container">
        <div className="row">
          <h1 className="text--center section__title">
            <span className="text-color">Featured Project</span>{" "}
          </h1>
        </div>
      </div>
      <li class="featured__project">
        <div class="featured__project__wrapper">
          <img src={featuredImg} alt="" className="project__img" />
          <div class="project__wrapper--bg"></div>
          <div class="project__description">
            <h3 class="project__description--title">{title}</h3>
            <h4 class="project__description--sub-title">{languages}</h4>
            <p class="project__description--para">{description}</p>
            <div class="project__description--links">
              <a href="#" class="project__description--link">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="project__description--link">
                <i class="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </li>
    </section>
  );
}

export default FeaturedProject;
