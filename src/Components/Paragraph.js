import React from "react";

function Paragraph(prop) {
  return (
    <div
      style={{
        color: "grey",
        paddingLeft: 22,
        paddingBottom: 15,
        fontSize: 14,
      }}
    >
      <span>{prop.content}</span>
    </div>
  );
}

export default Paragraph;
