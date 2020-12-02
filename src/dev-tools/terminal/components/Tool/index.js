import React, { useEffect } from "react";
import { View } from "@library/components";
import { StoreContext } from "@@terminal/contexts";
import store from "@@terminal/store";
import CommandHistory from "./CommandHistory";
import CommandLine from "./CommandLine";
import styles from "./styles";

const Tool = ({ commands, devOS, style }) => {
  const toolStore = store.create();
  const handleResize = (dimensions) => toolStore.dispatch("ui.resizeWidth", dimensions.size.width);

  useEffect(() => {
    devOS.events.addListener("onResize", handleResize);
    toolStore.dispatch("commands.add", commands);
  }, []);

  return (
    <View style={{ ...styles.view, ...style }}>
      <StoreContext.Provider value={toolStore}>
        <CommandHistory />
        <CommandLine />
      </StoreContext.Provider>
    </View>
  );
};

Tool.defaultProps = {
  commands: {},
  devOS: {},
  style: {},
};

export default Tool;
