import React from "react";
import PropTypes from "prop-types";

const Form = ({ type, name, placeholder, titleValue, titleHandler }) => (
  <div className="form-group">
    <input
      placeholder={placeholder}
      value={titleValue}
      type={type}
      name={name}
      onChange={titleHandler}
      className="form-control"
    />
  </div>
);

Form.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func,
  onHandleSubmit: PropTypes.func
};

export default Form;
