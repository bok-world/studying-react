import React from "react";
import Dialog from "./Dialog";

export default function ThankyouDialog() {
  return (
    <Dialog
      title={<h2>Thank you</h2>}
      description="It si honor to meet you"
      button={<button>닫아</button>}
    />
  );
}
