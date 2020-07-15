import React from "react";
import { View } from "@library/ui";
import { useStore } from "@@terminal/tools/hooks";
import HistoryItem from "./HistoryItem";
import styles from "./styles";

const CommandHistory = ({ style }) => {
  const history = useStore((store) => store.getState("history"));
  return (
    <View style={{ ...styles.view, ...style }}>
      {history.map((item, index) => {
        return <HistoryItem key={`HISTORY_ITEM_${index}`} {...item} />;
      })}
    </View>
  );
};

CommandHistory.defaultProps = {
  style: {},
};

export default CommandHistory;
