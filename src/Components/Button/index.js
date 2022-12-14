import React from "react";
import './Button.css';

function Button({bColor, content}) {
  return (
      <span className="Button" style={{ backgroundColor: `#${bColor}` }}>{content}</span>
  );
}

export default Button;
