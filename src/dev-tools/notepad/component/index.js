import React, { useEffect, useState } from "react";
import { View } from "@library/ui";
import { getLocalStorageValue, saveToLocalStorage } from "./helpers";
import styles from "./styles";

const Notepad = ({ style }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const val = event.target.value;
    setValue(val);
    saveToLocalStorage(val);
  };

  useEffect(() => {
    const storedVal = getLocalStorageValue();
    setValue(storedVal);
  }, []);

  return (
    <View style={{ ...styles.view, ...style }}>
      <textarea style={styles.textarea} onChange={handleChange} spellCheck={false} value={value} />
    </View>
  );
};

Notepad.defaultProps = {
  style: {},
};

export default Notepad;
