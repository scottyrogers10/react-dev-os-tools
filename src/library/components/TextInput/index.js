import React, { useState } from "react";
import styles from "./styles";
import "./stylesheet.css";

const TextInput = ({ onBlur, onChange, style, value }) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleBlur = (event) => {
		setIsFocused(false);
		onBlur(event);
	};

	const handleFocus = () => setIsFocused(true);

	return (
		<input
			style={{ ...styles.input, ...style, ...styles.focus(isFocused) }}
			id={"dev-os-text-input"}
			onBlur={handleBlur}
			onChange={onChange}
			onFocus={handleFocus}
			type={"default"}
			value={value}
		/>
	);
};

TextInput.defaultProps = {
	onBlur: () => {},
	onChange: () => {},
	style: {},
	value: "",
};

export default TextInput;
