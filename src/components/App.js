import React, { Component } from "react";
// import _ from "lodash";
// import "react-quill/dist/quill.snow.css";
import Navigation from "./presentational/Navigation";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
      </div>
    );
  }
}

export default App;
