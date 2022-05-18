import React from "react";
import CustomeDialog from "./CustomeDialog";
import Dialog from "./Dialog";

export default function WelcomeDialog() {
  //   return (
  //     <Dialog>
  //       <h1>Welcome</h1>
  //       <h2>Thank you</h2>
  //     </Dialog>
  //   );

  return <CustomeDialog title="welcome" description="Thanks" />;
}
