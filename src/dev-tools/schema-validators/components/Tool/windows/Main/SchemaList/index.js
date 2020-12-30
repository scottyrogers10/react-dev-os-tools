import React from "react";
import { View } from "@library/components";
import Schema from "./Schema";
import styles from "./styles";

const SchemaList = ({ devOS, schemas, style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      {schemas.map((schema, index) => {
        const isOdd = index % 2 !== 0;
        return <Schema style={styles.schema(isOdd)} key={`SCHEMA_${index}`} devOS={devOS} schema={schema} />;
      })}
    </View>
  );
};

SchemaList.defaultProps = {
  devOS: {},
  schemas: [],
  style: {},
};

export default SchemaList;
