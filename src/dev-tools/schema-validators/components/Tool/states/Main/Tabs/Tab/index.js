import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const Tab = ({ index, name, style, setSelectedIndex }) => {
  const handleClick = () => setSelectedIndex(index);

  return (
    <View style={{ ...styles.view, ...style }} onClick={handleClick}>
      {name}
    </View>
  );
};

Tab.defaultProps = {
  index: 0,
  name: "",
  setSelectedIndex: () => {},
  style: {},
};

export default Tab;
