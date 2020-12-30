import React from "react";
import { View } from "@library/components";
import Edit from "./Edit";
import Footer from "./Footer";
import styles from "./styles";

const Details = ({ style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <Edit style={styles.edit} />
      <Footer />
    </View>
  );
};

Details.defaultProps = {
  style: {},
};

export default Details;
