import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

export default function Input({
  value,
  onChange,
  onSubmit,
  className = "input",
  placeholder = ""
}) {
  return (
    <form onSubmit={() => onSubmit}>
      <input
        placeholder={placeholder}
        type="text"
        onChange={onChange}
        value={value}
        className={className}
      />
    </form>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string
};
