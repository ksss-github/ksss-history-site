import React from "react";
import PropTypes from "prop-types";
import "./Btn.css";

const BtnDark = ({ onClick, disabled, children, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn-Dark ${className}`}
    >
      {children}
    </button>
  );
};

BtnDark.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BtnDark.defaultProps = {
  disabled: false,
  className: "",
};

export default BtnDark;
