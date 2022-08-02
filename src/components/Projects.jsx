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
          <ProjectsUI title="hello 2" languages="java" description="daddy" />
          <ProjectsUI
            title="Protfolio Template"
            languages="HTML CSS JavaScript"
            description="An interactive protfolio website with JavaScript"
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
      <button id="btn" class="form__submit">
        View more
      </button>
    </section>
  );
}

export default Projects;
