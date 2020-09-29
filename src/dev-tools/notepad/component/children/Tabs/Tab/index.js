import React from "react";
import { View } from "@library/ui";
import styles from "./styles";

const Tab = ({ index, style, title }) => {
  return <View style={{ ...styles.view, ...style }}>{title}</View>;
};

Tab.defaultProps = {
  index: 0,
  style: {},
  title: "",
};

export default Tab;
