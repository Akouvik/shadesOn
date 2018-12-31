import React from "react";

const Navigation = ({ input }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      <div id="with-ma">With Ma</div>
      <span id="shades">Shades On</span>
    </a>
    {/* <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active cool-underline">
          <a className="nav-link" href="#">
            Beauty <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item cool-underline">
          <a className="nav-link" href="#">
            Fashion
          </a>
        </li>
        <li className="nav-item cool-underline">
          <a className="nav-link" href="#">
            Life
          </a>
        </li>
        <li className="nav-item cool-underline">
          <a className="nav-link disabled" href="#">
            Travel
          </a>
        </li>
        <li className="nav-item cool-underline">
          <a className="nav-link disabled" href="#">
            Home
          </a>
        </li>
      </ul>
    </div>
    <hr />
  </nav>
);

export default Navigation;
