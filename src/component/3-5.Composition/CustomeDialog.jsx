import React from "react";

export default function CustomeDialog(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h5>{props.description}</h5>
    </div>
  );
}
