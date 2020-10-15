import React from "react";
import { View } from "@library/ui";
import List from "./List";
import styles from "./styles";

const Tasks = ({ style, items }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <List items={items} />
    </View>
  );
};

Tasks.defaultProps = {
  style: {},
  items: [],
};

export default Tasks;
