import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const Logs = ({ data, style }) => {
	console.log(data);
	return <View style={{ ...styles.view, ...style }}>Logs</View>;
};

Logs.defaultProps = {
	data: {},
	style: {},
};

export default Logs;
