import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const Log = ({ data, style }) => {
	return <View style={{ ...styles.view, ...style }}>{data.message}</View>;
};

Log.defaultProps = {
	data: {},
	style: {},
};

export default Log;
