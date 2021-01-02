import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const Tag = ({ children, style }) => {
	return <View style={{ ...styles.view, ...style }}>{children}</View>;
};

Tag.defaultProps = {
	children: null,
	style: {},
};

export default Tag;
