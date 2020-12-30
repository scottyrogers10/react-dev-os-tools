import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const Results = ({ style }) => {
  return <View style={{ ...styles.view, ...style }}>Results</View>;
};

Results.defaultProps = {
  style: {},
};

export default Results;
