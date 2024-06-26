"use client"
import React from "react";
import PropTypes from "prop-types";
import "./Btn.css";

export const BtnLight = ({ onClick, disabled, children, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn__Light ${className}`}
    >
      {children}
    </button>
  );
};

BtnLight.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BtnLight.defaultProps = {
  disabled: false,
  className: "",
};

