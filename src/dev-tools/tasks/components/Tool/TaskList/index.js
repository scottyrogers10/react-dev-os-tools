import React from "react";
import { View } from "@library/components";
import Task from "./Task";
import styles from "./styles";

const TaskList = ({ onExecute, style, tasks }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      {tasks.map((task, index) => {
        const isOdd = index % 2 !== 0;
        return <Task style={styles.task(isOdd)} key={`TASK_${index}`} onExecute={onExecute} task={task} />;
      })}
    </View>
  );
};

TaskList.defaultProps = {
  onExecute: () => {},
  style: {},
  tasks: [],
};

export default TaskList;
