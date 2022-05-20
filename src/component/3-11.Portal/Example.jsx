import React from "react";
import { createPortal } from "react-dom";
import ThankyouDialog from "./ThankyouDialog";

const Portal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
};

export default function Example() {
  return (
    <div>
      <Portal>
        <ThankyouDialog />
      </Portal>
      <div sytle={{ position: "absolute" }}>
        <button>하하하</button>
      </div>
    </div>
  );
}
