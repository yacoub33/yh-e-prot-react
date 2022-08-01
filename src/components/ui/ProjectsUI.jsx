import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectsUI({ title, languages, description }) {
  return (
    <div className="project__hover">
      <div className="project">
        <div className="project__wrapper">
          <div className="links">
            <a href="/" className="project__icon">
              <FontAwesomeIcon icon="fa-solid fa-file" />
            </a>
            <div className="right">
              <a href="/" className="project__icon">
                <FontAwesomeIcon icon="fa-solid fa-link" />
              </a>
            </div>
          </div>
          <h3 className="project__title">{title}</h3>
          <p className="project__descr">{description}</p>
          <h4 className="project__sub-title">{languages}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProjectsUI;
