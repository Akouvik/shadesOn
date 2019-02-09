import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TabObject from "./Tab";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <div id="with-ma">With Ma</div>
            <span id="shades">Shades On</span>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item cool-underline">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item active cool-underline">
                <Link to="/tech">Tech</Link>
              </li>
              <li className="nav-item cool-underline">
                <Link to="/Travel">Travel</Link>
              </li>
              <li className="nav-item cool-underline">
                <Link to="/life">Beauty&Etiquette</Link>
              </li>
              <li className="nav-item cool-underline">
                <Link to="/readme">Read Me</Link>
              </li>
              {/* <li className="nav-item cool-underline">
                <Link to="/contributor">contributor</Link>
              </li> */}
            </ul>
          </div>
          <hr />
          <Route exact path="/" component={TabObject.Home} />
          <Route path="/travel" component={TabObject.Travel} />
          <Route path="/tech" component={TabObject.Tech} />
          <Route path="/life" component={TabObject.Beauty} />
          <Route path="/readme" component={TabObject.Readme} />
          <Route path="/contributor" component={TabObject.Contributor} />
        </nav>
      </Router>
    );
  }
}

export default Navigation;
