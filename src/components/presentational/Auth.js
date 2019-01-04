//https://www.youtube.com/watch?v=TGQi4LgoRRw
import React from "react";

const Authentication = ({}) => (
  <div className="form-group">
    <input
      type="text"
      name="login"
      placeholder="username"
      className="form-control"
    />
    <input
      type="text"
      name="password"
      placeholder="password"
      className="form-control"
    />
    <button type="button" className="btn btn-primary">
      Login
    </button>
  </div>
);

export default Authentication;
