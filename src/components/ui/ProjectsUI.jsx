import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectsUI({ title, languages, description, github, live, iconLink }) {
  return (
    <div className="project__hover">
      <div className="project">
        <div className="project__wrapper">
          <div className="links">
            <a
              href={github}
              className="project__icon"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
            <div className="right">
              <a
                href={live}
                class="project__icon"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={iconLink} />
              </a>
            </div>
          </div>
          <h3 className="project__title">{title}</h3>
          <p className="project__descr">{description}</p>
          <h4 className="project__sub-title tech__font">{languages}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProjectsUI;
