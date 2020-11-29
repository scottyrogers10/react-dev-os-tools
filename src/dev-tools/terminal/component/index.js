import React, { useEffect } from "react";
import { View } from "@library/components";
import { StoreContext } from "@library/ui";
import CommandHistory from "./CommandHistory";
import CommandLine from "./CommandLine";
import styles from "./styles";

const Terminal = ({ commands, store, style }) => {
  useEffect(() => {
    store.dispatch("commands.add", commands);
  }, []);

  return (
    <View style={{ ...styles.view, ...style }}>
      <StoreContext.Provider value={store}>
        <CommandHistory />
        <CommandLine />
      </StoreContext.Provider>
    </View>
  );
};

Terminal.defaultProps = {
  commands: {},
  store: {},
  style: {},
};

export default Terminal;
