import React from "react";
import ProjectsUI from "./ui/ProjectsUI";

function Projects({ title, languages, description }) {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="text--center section__title">Projects</h1>
        </div>
        <div className="project__list">
          <ProjectsUI
            title="Banking Management System"
            languages="Java"
            description="A simple text-based Java Banking Management System. Includes multiple customers, branches, and banks."
          />
          <ProjectsUI
            title="Hand Gesture Recognition"
            languages="Python"
            description="A Hand Gesture Recognition system made in Python using external libraries such as OpenCV, Numpy and a lot more"
          />
          <ProjectsUI
            title="Protfolio Template"
            languages="HTML CSS JavaScript"
            description="An interactive protfolio website with JavaScript"
            github="https://github.com/yacoub33/yh-e-protfolio"
            live="https://brilliant-cactus-eab310.netlify.app"
          />
          <ProjectsUI
            title="Google"
            languages="html css js"
            description="eyo"
          />
          <ProjectsUI title="hello 2" languages="java" description="daddy" />
          <ProjectsUI
            title="Google"
            languages="html css js"
            description="The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href"
          />
        </div>
      </div>
      <a href="https://github.com/yacoub33?tab=repositories">
        <button id="btn" class="form__submit">
          View more
        </button>
      </a>
    </section>
  );
}

export default Projects;
