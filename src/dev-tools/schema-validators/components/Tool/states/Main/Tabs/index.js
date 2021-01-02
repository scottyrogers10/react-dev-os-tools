import React from "react";
import { View } from "@library/components";
import Tab from "./Tab";
import styles from "./styles";

const Tabs = ({ selectedIndex, setSelectedIndex, style, tabs }) => {
	return (
		<View style={{ ...styles.view, ...style }}>
			{tabs.map((tab, index) => {
				const isSelected = selectedIndex === index;

				return (
					<Tab
						style={styles.tab(isSelected)}
						index={index}
						key={`ITEM_${index}`}
						name={tab.name}
						setSelectedIndex={setSelectedIndex}
					/>
				);
			})}
		</View>
	);
};

Tabs.defaultProps = {
	selectedIndex: 0,
	setSelectedIndex: () => {},
	style: {},
	tabs: [],
};

export default Tabs;
