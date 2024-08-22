import React from "react";
import PropTypes from "prop-types";

const Spacer = ({ size }) => {
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

Spacer.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Spacer.defaultProps = {
  size: "medium",
};

export default Spacer;
