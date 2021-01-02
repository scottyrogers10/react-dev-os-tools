import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const HistoryItem = ({ printStyles, style, type, value }) => {
	return (
		<View style={{ ...styles.view, ...style }}>
			{type === "COMMAND" && <View style={styles.prompt}>DEV-OS:</View>}
			<View style={{ ...styles.value, ...printStyles }}>{value}</View>
		</View>
	);
};

HistoryItem.defaultProps = {
	printStyles: {},
	style: {},
	type: "",
	value: "",
};

export default HistoryItem;
