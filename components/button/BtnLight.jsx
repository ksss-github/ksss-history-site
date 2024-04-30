import React from "react";
import PropTypes from "prop-types";
import "./Btn.css";

/**
 * BtnLight is a light-themed button component.
 * @param {Object} props - The props object.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @param {boolean} props.disabled - The disabled state of the button.
 * @param {React.ReactNode} props.children - The children nodes of the button.
 * @param {string} props.className - The CSS class of the button.
 */
const BtnLight = ({ onClick, disabled, children, className }) => {
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

export default BtnLight;