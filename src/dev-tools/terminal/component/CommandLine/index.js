import React, { useEffect, useRef, useState } from "react";
import { View } from "@library/ui";
import { useStore } from "@@terminal/tools/hooks";
import store from "@@terminal/store";
import { executeCommand, setTextAreaHeight } from "./helpers";
import styles from "./styles";

const CommandLine = ({ style }) => {
  const textAreaRef = useRef(null);
  const hiddenTextAreaRef = useRef(null);
  const [value, setValue] = useState("");
  const { width } = useStore((store) => store.getState("ui"));

  const handleChange = (event) => {
    const trimmedInput = event.target.value.replace(/^\s+/g, "");
    setValue(trimmedInput);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      store.dispatch("history.addLine", { type: "COMMAND", value });
      executeCommand(value);
      setValue("");
      event.preventDefault();
    }
  };

  useEffect(() => {
    setTextAreaHeight(textAreaRef, hiddenTextAreaRef);
  }, [value, width]);

  return (
    <View style={{ ...styles.view, ...style }}>
      <View style={styles.prompt}>DEV-OS: </View>
      <textarea
        style={styles.textArea}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={textAreaRef}
        rows={1}
        spellCheck="false"
        value={" ".repeat(8) + value}
      />
      <textarea
        style={{ ...styles.textArea, ...styles.hiddenTextArea }}
        onChange={() => {}}
        ref={hiddenTextAreaRef}
        rows={1}
        value={" ".repeat(8) + value}
      />
    </View>
  );
};

CommandLine.defaultProps = {
  style: {},
};

export default CommandLine;
