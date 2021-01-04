import React from "react";
import { View } from "@library/components";
import Log from "./Log";
import styles from "./styles";

const Logs = ({ data, style }) => {
	return (
		<View style={{ ...styles.view, ...style }}>
			{data.logs.map((log, index) => {
				const isOdd = index % 2 !== 0;
				return <Log style={styles.log(isOdd)} key={`LOG_${index}`} data={log} />;
			})}
		</View>
	);
};

Logs.defaultProps = {
	data: {},
	style: {},
};

export default Logs;
