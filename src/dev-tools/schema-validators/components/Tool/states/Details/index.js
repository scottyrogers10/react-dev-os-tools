import React, { useState } from "react";
import { View } from "@library/components";
import { Edit, Footer } from "./children";
import { buildStateParams } from "./helpers";
import styles from "./styles";

const Details = ({ devOS, schema, style }) => {
  const [params, setParams] = useState(buildStateParams(schema.params));

  return (
    <View style={{ ...styles.view, ...style }}>
      <Edit style={styles.edit} schema={schema} />
      <Footer devOS={devOS} params={params} schema={schema} />
    </View>
  );
};

Details.defaultProps = {
  devOS: {},
  schema: {},
  style: {},
};

export default Details;
