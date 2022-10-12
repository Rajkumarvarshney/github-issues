import React from "react";

function Card(props) {
  return (
    <>
      <span style={{ fontWeight: "bold" }}>{props.content}</span>
    </>
  );
}

export default Card;
