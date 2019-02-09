import React from "react";
import PropTypes from "prop-types";

const Form = ({ type, name, placeholder, titleValue, titleHandler }) => (
  <div className="form-group write-article">
    <select className="options">
      <option value="Tech">Tech</option>
      <option value="Travel">Travel</option>
      <option value="Beauty">Beauty</option>
      <option value="Readme">Read me</option>
      <option value="category" selected>
        category
      </option>
    </select>
    <input
      placeholder={placeholder}
      value={titleValue}
      type={type}
      name={name}
      onChange={titleHandler}
      className="form-control article-title-input"
    />
  </div>
);

Form.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Form;
