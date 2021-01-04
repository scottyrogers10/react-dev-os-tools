import React, { useEffect, useState } from "react";
import { getLocalStorageValue, saveToLocalStorage } from "../../helpers";
import styles from "./styles";

const TextArea = ({ selectedTab, style }) => {
	const [value, setValue] = useState("");

	const handleChange = (event) => {
		const val = event.target.value;
		setValue(val);
		saveToLocalStorage(selectedTab, val);
	};

	useEffect(() => {
		const storedVal = getLocalStorageValue()[selectedTab] || "";
		setValue(storedVal);
	}, [selectedTab]);

	return <textarea style={{ ...styles.textarea, ...style }} onChange={handleChange} spellCheck={false} value={value} />;
};

TextArea.defaultProps = {
	selectedTab: 0,
	style: {},
};

export default TextArea;
