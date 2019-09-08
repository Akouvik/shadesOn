import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TabObject from "./Tab";
import Blog from "./Blog";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand">
            <div id="hanging_title">With My</div>
            <span id="shades_on">Shades On</span>
          </span>
          <div className="navbar-menu">
            <ul className="navbar-nav">
              <li className="nav-item cool-underline">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item active cool-underline">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav-item cool-underline">
                <Link to="/Projects">Projects</Link>
              </li>
              <li className="nav-connect cool-underline">
                <Link to="/connect" id="nav-connect-link">
                  Connect
                </Link>
                <div id="connect_dropdown_content">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Akouvik"
                  >
                    Github
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/akouvi-kouedjin/"
                  >
                    LinkedIn
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/Bkouvi"
                  >
                    Twitter
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <hr />
          <Route exact path="/" component={TabObject.Home} />
          <Route exact path="/blog" component={Blog} />
          {/* <Route exact path="/articles" component={TabObject.Articles} /> */}

          <Route path="/projects" component={TabObject.Projects} />
          <Route path="/connect" component={TabObject.Connect} />
        </div>
      </Router>
    );
  }
}

export default Navigation;
