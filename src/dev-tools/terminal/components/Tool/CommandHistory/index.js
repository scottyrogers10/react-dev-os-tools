import React, { useContext } from "react";
import { View } from "@library/components";
import { useStore } from "@library/hooks";
import { StoreContext } from "@@terminal/contexts";
import HistoryItem from "./HistoryItem";
import styles from "./styles";

const CommandHistory = ({ style }) => {
  const store = useContext(StoreContext);
  const history = useStore(store)((store) => store.getState("history"));

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
