import React from "react";
import { Text, View } from "@library/ui";
import ExecuteButton from "./ExecuteButton";
import styles from "./styles";

const Item = ({ description, execute, name, style }) => {
  const handleClick = () => execute();

  return (
    <View style={{ ...styles.view, ...style }}>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <ExecuteButton onClick={handleClick} />
    </View>
  );
};

Item.defaultProps = {
  description: "",
  execute: () => {},
  name: "",
  style: {},
};

export default Item;
