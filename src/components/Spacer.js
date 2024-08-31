import React from "react";

const Spacer = ({ size="medium" }) => {
  let height;

  switch (size) {
    case "small":
      height = "50px";
      break;
    case "medium":
      height = "100px";
      break;
    case "large":
      height = "120px";
      break;
    default:
      height = "50px";
  }

  return <div style={{ height }} />;
};

export default Spacer;
