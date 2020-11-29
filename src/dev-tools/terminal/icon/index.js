import React from "react";
import { View } from "@library/components";
import icon from "../assets/icon-96x96.png";
import styles from "./styles";

const Icon = ({ style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <img height={"96px"} width={"96px"} src={icon} />
    </View>
  );
};

Icon.defaultProps = {
  style: {},
};

export default Icon;
