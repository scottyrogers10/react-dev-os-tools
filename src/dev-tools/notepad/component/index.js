import React, { useState } from "react";
import { View } from "@library/ui";
import { Tabs, TextArea } from "./children";
import styles from "./styles";

const Notepad = ({ style }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={{ ...styles.view, ...style }}>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TextArea selectedTab={selectedTab} />
    </View>
  );
};

Notepad.defaultProps = {
  style: {},
};

export default Notepad;
