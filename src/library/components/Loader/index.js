import React from "react";
import { View } from "@library/components";
import styles from "./styles";
import "./stylesheet.css";

const Loader = ({ style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <div id="dev-os-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </View>
  );
};

Loader.defaultProps = {
  style: {},
};

export default Loader;
