import React from "react";

function Nav() {
  return (
    <nav className="nav__container">
      <div className="nav__wrapper">
        <figure>
          <h1>YH</h1>
        </figure>

        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link">
              Projects
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
