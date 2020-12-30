import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const ExecuteButton = ({ onClick, style }) => {
  return (
    <View style={{ ...styles.view, ...style }} onClick={onClick}>
      Run
    </View>
  );
};

ExecuteButton.defaultProps = {
  onClick: () => {},
  style: {},
};

export default ExecuteButton;
