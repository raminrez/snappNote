import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

export default function Button({ onClick, className = "button", children }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
