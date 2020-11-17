import React from "react";
import { Text, Toggle, View } from "@library/ui";
import { useStore } from "@library/hooks";
import toolStore from "@@componentEditor/store";
import styles from "./styles";

const ComponentEditor = ({ devOS, style }) => {
  const isActive = useStore(toolStore)((store) => store.getState("mode").isActive);
  const handleClick = () => {
    toolStore.dispatch("mode.toggleActive");
    toolStore.dispatch("devOS.setCreateWindow", devOS.createWindow);
  };

  return (
    <View style={{ ...styles.view, ...style }}>
      <Text>Editor Mode</Text>
      <Toggle onClick={handleClick} value={isActive} />
    </View>
  );
};

ComponentEditor.defaultProps = {
  devOS: {},
  style: {},
};

export default ComponentEditor;
