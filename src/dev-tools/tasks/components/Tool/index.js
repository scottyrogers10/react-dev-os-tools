import React, { useState } from "react";
import { View } from "@library/components";
import Tabs from "./Tabs";
import TaskList from "./TaskList";
import styles from "./styles";

const Tool = ({ onExecute, style, tabs }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<View style={{ ...styles.view, ...style }}>
			<Tabs style={styles.tabs} selectedIndex={selectedIndex} tabs={tabs} setSelectedIndex={setSelectedIndex} />
			<TaskList onExecute={onExecute} tasks={tabs[selectedIndex]?.tasks} />
		</View>
	);
};

Tool.defaultProps = {
	onExecute: () => {},
	style: {},
	tabs: [],
};

export default Tool;
