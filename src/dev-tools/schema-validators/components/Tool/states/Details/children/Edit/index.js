import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const Edit = ({ style }) => {
  return <View style={{ ...styles.view, ...style }}></View>;
};

Edit.defaultProps = {
  style: {},
};

export default Edit;
