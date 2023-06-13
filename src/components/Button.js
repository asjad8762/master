import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const STYLES = ["btnn-primary", "btnn-outline"];
  const SIZE = ["btnn-medium", "btnn-large"];

  const changeButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const chnageButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <button
      className={`btnn  ${changeButtonStyle} ${chnageButtonSize}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
