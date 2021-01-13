import React, { useState } from "react";
import { View } from "@library/components";
import SchemaList from "./SchemaList";
import Tabs from "./Tabs";
import styles from "./styles";

const Main = ({ devOS, style, tabs }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<View style={{ ...styles.view, ...style }}>
			<Tabs style={styles.tabs} selectedIndex={selectedIndex} tabs={tabs} setSelectedIndex={setSelectedIndex} />
			<SchemaList devOS={devOS} schemas={tabs[selectedIndex]?.schemas} />
		</View>
	);
};

Main.defaultProps = {
	devOS: {},
	style: {},
	tabs: [],
};

export default Main;
