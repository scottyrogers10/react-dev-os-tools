import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const Error = ({ errorMessage, style }) => {
	return <View style={{ ...styles.view, ...style }}>{errorMessage}</View>;
};

Error.defaultProps = {
	errorMessage: "",
	style: {},
};

export default Error;
