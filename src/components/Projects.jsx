import React from "react";
import ProjectsUI from "./ui/ProjectsUI";

function Projects({ title, languages, description, liveNA }) {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="text--center section__title">Projects</h1>
        </div>
        <div className="project__list">
          <ProjectsUI
            title="Personal Protfolio"
            languages="HTML CSS JavaScript React"
            description="This website."
            github="https://github.com/yacoub33/yh-e-prot-react"
          />
          <ProjectsUI
            title="Hand Gesture Recognition"
            languages="Python"
            description="A Hand Gesture Recognition system made in Python using external libraries such as OpenCV, Numpy and a lot more"
            github="/"
          />

          <ProjectsUI
            title="Banking Management System"
            languages="Java"
            description="A simple text-based Java Banking Management System. Includes multiple customers, branches, and banks."
            github="https://github.com/yacoub33/Banking"
          />

          <ProjectsUI
            title="Protfolio Template"
            languages="HTML CSS JavaScript"
            description="An interactive protfolio website with JavaScript"
            github="https://github.com/yacoub33/yh-e-protfolio"
            live="https://brilliant-cactus-eab310.netlify.app"
          />

          <ProjectsUI
            title="Roll the Dice"
            languages="HTML CSS JavaScript"
            description="A simple web 2-player game. If you roll the dice and get one you lose all your points unless you save them. First player to reach 21 points wins. (Large Screens Only)"
            github="https://github.com/yacoub33/Pig-game"
            live="https://enchanting-bombolone-54d90b.netlify.app"
          />
          <ProjectsUI
            title="Guess The Number"
            languages="HTML CSS JavaScript"
            description="Guess a number between 1-20 if its low you'll recieve Too Low guess Higher or Too High guess Lower. Try to break your record. (Large Screens Only)"
            github="https://github.com/yacoub33/Guess-the-number-game"
            live="https://zippy-kringle-f691ba.netlify.app"
          />
        </div>
      </div>
      <a
        href="https://github.com/yacoub33?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <button id="btn" class="form__submit">
          View more
        </button>
      </a>
    </section>
  );
}

export default Projects;
