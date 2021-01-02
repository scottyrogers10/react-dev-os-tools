import React, { useState } from "react";
import { View } from "@library/components";
import { Tabs, TextArea } from "./children";
import styles from "./styles";

const Tool = ({ style }) => {
	const [selectedTab, setSelectedTab] = useState(0);

	return (
		<View style={{ ...styles.view, ...style }}>
			<Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			<TextArea selectedTab={selectedTab} />
		</View>
	);
};

Tool.defaultProps = {
	style: {},
};

export default Tool;
