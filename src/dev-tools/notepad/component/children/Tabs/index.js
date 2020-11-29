import React from "react";
import { View } from "@library/components";
import Tab from "./Tab";
import styles from "./styles";

const Tabs = ({ selectedTab, setSelectedTab, style }) => {
  const tabs = [];

  return (
    <View style={{ ...styles.view, ...style }}>
      {tabs.map((tab, index) => {
        return <Tab key={`TAB_${index}`} {...tab} />;
      })}
    </View>
  );
};

Tabs.defaultProps = {
  selectedTab: 0,
  setSelectedTab: () => {},
  style: {},
};

export default Tabs;
