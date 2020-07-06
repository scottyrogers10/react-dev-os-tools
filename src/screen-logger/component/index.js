import React from "react";
import styles from "./styles";

const ScreenLogger = ({ style }) => {
  return <div style={{ ...styles.view, ...style }}></div>;
};

ScreenLogger.defaultProps = {
  style: {},
};

export default ScreenLogger;
