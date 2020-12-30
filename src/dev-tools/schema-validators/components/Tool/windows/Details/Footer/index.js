import React from "react";
import { View } from "@library/components";
import ExecuteButton from "./ExecuteButton";
import styles from "./styles";

const Footer = ({ style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <ExecuteButton style={styles.executeButton} />
    </View>
  );
};

Footer.defaultProps = {
  style: {},
};

export default Footer;
