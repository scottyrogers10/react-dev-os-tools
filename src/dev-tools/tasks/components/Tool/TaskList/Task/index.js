import React from "react";
import { Text, View } from "@library/components";
import ExecuteButton from "./ExecuteButton";
import styles from "./styles";

const Task = ({ onExecute, style, task }) => {
  const handleClick = () => task.execute(onExecute());

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
  onExecute: () => {},
  style: {},
  task: {},
};

export default Task;
