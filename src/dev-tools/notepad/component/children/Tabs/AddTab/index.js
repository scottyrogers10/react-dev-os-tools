import React from "react";
import { View } from "@library/ui";
import styles from "./styles";

const AddTab = ({ style }) => {
  return <View style={{ ...styles.view, ...style }}>+</View>;
};

AddTab.defaultProps = {
  style: {},
};

export default AddTab;
