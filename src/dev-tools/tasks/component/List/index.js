import React from "react";
import { View } from "@library/ui";
import Item from "./Item";
import styles from "./styles";

const List = ({ items, style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      {items.map((item, index) => {
        const isOdd = index % 2 !== 0;
        return <Item style={styles.item(isOdd)} key={`ITEM_${index}`} {...item} />;
      })}
    </View>
  );
};

List.defaultProps = {
  items: [],
  style: {},
};

export default List;
