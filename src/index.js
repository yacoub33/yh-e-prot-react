import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// import { faGithub } from "@fortawesome/free-solid-svg-icons";

import {
  faBars,
  faFile,
  faLink,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faFile, faLink, faAngleRight, fab, faGithub, faLinkedin);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
