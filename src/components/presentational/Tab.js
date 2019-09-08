import React from "react";
// import { database } from "../../firebase";
import connect from "./images/connect.jpg";
import me from "./images/me.jpg";

const TabObject = {
  Home: () => {
    return (
      <div className="_main">
        <article>
          <h1>Hello World!</h1>
          <p>
            On my never ending journey to find a suitable 9 to 5 that won’t make
            me feel dead on the inside and excited for the future i have landed
            on programming. Programming is the new American dream in that you
            can make it in this industry so long as you work hard enough and are
            willing to put in the time and dedication.
          </p>
          <h2> Welcome,</h2>
          <img src={me} alt="Logo" id="me" />
          <p>
            My name is Akouvi and I am a web Developer, amateur photography and
            I sometimes have unorganized thoughts that flow out of me and I post
            them on /blog. Feel free to connect with me
          </p>
        </article>
      </div>
    );
  },

  Photography: () => {
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
