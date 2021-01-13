import React from "react";
import { Loader, View } from "@library/components";
import styles from "./styles";

const Loading = ({ style }) => {
	return (
		<View style={{ ...styles.view, ...style }}>
			<Loader />
		</View>
	);
};

Loading.defaultProps = {
	style: {},
};

export default Loading;
