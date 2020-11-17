import React from "react";
import styles from "./styles";

const Toggle = ({ onClick, style, value }) => {
  return (
    <div style={{ ...styles.container, ...style }} onClick={onClick}>
      {value ? "On" : "Off"}
    </div>
  );
};

Toggle.defaultProps = {
  onClick: () => {},
  style: {},
  value: false,
};

export default Toggle;
