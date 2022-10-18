import React from "react";

function Button(props) {
  return (
    <div className="btn" style={{ backgroundColor: `#${props.colorr}` }}>
      <span style={{ fontSize: 12 }}>{props.content}</span>
    </div>
  );
}

export default Button;
