import React from "react";
import { Text, View } from "@library/components";
import ExecuteButton from "./ExecuteButton";
import styles from "./styles";

const Task = ({ style, task }) => {
  const handleClick = () => task.execute();

  return (
    <View style={{ ...styles.view, ...style }}>
      <View style={styles.info}>
        <Text style={styles.name}>{task.name}</Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>
      <ExecuteButton onClick={handleClick} />
    </View>
  );
};

Task.defaultProps = {
  style: {},
  task: {},
};

export default Task;
