import React, { useState } from "react";
import { Text, TextInput, View } from "@library/components";
import styles from "./styles";

const Param = ({ label, param, setParams, style }) => {
	const [value, setValue] = useState(param.value);

	const handleBlur = () => setParams({ [label]: { ...param, value } });
	const handleChange = (event) => setValue(event.target.value);

	return (
		<View style={{ ...styles.view, ...style }}>
			<Text style={styles.label}>{`${label}:`}</Text>
			<TextInput style={styles.textInput} onBlur={handleBlur} onChange={handleChange} value={value} />
		</View>
	);
};

Param.defaultProps = {
	label: "",
	param: {},
	setParams: () => {},
	style: {},
};

export default Param;
