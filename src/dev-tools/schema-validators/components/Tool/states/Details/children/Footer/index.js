import React from "react";
import { View } from "@library/components";
import { ExecuteButton } from "./children";
import { buildExecuteAsyncFunction, createWindow } from "./helpers";
import styles from "./styles";

const Footer = ({ devOS, params, schema, style }) => {
  const executeAsync = buildExecuteAsyncFunction(params, schema);
  const handleClick = (event) => createWindow({ devOS, event, executeAsync, schema });

  return (
    <View style={{ ...styles.view, ...style }}>
      <ExecuteButton style={styles.executeButton} onClick={handleClick} />
    </View>
  );
};

Footer.defaultProps = {
  devOS: {},
  params: {},
  schema: {},
  style: {},
};

export default Footer;
