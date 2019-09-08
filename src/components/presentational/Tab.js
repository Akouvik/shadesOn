import React from "react";
// import { database } from "../../firebase";
import connect from "./images/connect.jpg";
import me from "./images/me.jpg";

const TabObject = {
  Home: () => {
    return (
      <div className="_main">
        <article>
          <h2 id="welcome"> Welcome,</h2>
          <img src={me} alt="Logo" id="me" />
        </article>
      </div>
    );
  },

  Projects: () => {
    return (
      <div className="_main" id="photos">
        <h1>Coming Soon....</h1>
      </div>
    );
  },
  Connect: () => {
    return <img src={connect} alt="Logo" id="connect_bg_img" />;
  }
};

export default TabObject;
