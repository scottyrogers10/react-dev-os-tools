import React from "react";
import { View } from "@library/ui";
import CommandHistory from "./CommandHistory";
import CommandLine from "./CommandLine";
import styles from "./styles";

const Terminal = ({ style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <CommandHistory />
      <CommandLine />
    </View>
  );
};

Terminal.defaultProps = {
  style: {},
};

export default Terminal;
