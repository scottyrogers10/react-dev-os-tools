import React from "react";
import { View } from "@library/ui";
import styles from "./styles";

const CommandHistory = ({ style }) => {
  return <View style={{ ...styles.view, ...style }}></View>;
};

CommandHistory.defaultProps = {
  style: {},
};

export default CommandHistory;
