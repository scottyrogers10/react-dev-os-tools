import React, { useEffect } from "react";
import { View } from "@library/ui";
import store from "@@terminal/store";
import CommandHistory from "./CommandHistory";
import CommandLine from "./CommandLine";
import styles from "./styles";

const Terminal = ({ commands, style }) => {
  useEffect(() => {
    store.dispatch("commands.add", commands);
  }, []);

  return (
    <View style={{ ...styles.view, ...style }}>
      <CommandHistory />
      <CommandLine />
    </View>
  );
};

Terminal.defaultProps = {
  commands: {},
  style: {},
};

export default Terminal;
