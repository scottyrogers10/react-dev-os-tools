import React from "react";
import { useHover, useStore } from "@library/hooks";
import { Text, View, ViewRef } from "@library/ui";
import toolStore from "@@componentEditor/store";
import styles from "./styles";

export default (Component, filePath) => {
  return (props) => {
    const { isHovered, ref } = useHover();
    const isActive = useStore(toolStore)((store) => store.getState("mode").isActive);

    const handleClick = (event) => {
      const x = event.clientX + 24;
      const y = event.clientY + 24;

      fetch(`http://localhost:8080/component?filePath=src/components${filePath}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
          const Editor = () => {
            return <Text style={styles.editor}>{JSON.parse(result).content}</Text>;
          };

          toolStore.getState("devOS").createWindow({
            component: Editor,
            title: "Button - index.js",
            position: { x, y },
            size: { height: 485, width: 570 },
          });
        });
    };

    return (
      <ViewRef style={styles.view} ref={ref}>
        {isActive ? (
          <View style={{ ...styles.outline(isHovered) }} onClick={handleClick}>
            <Component {...props} />
          </View>
        ) : (
          <Component {...props} />
        )}
      </ViewRef>
    );
  };
};
