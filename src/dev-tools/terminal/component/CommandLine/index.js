import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext, View } from "@library/ui";
import { useStore } from "@library/hooks";
import { executeCommand, setTextAreaHeight } from "./helpers";
import styles from "./styles";

const CommandLine = ({ style }) => {
  const textAreaRef = useRef(null);
  const hiddenTextAreaRef = useRef(null);
  const [value, setValue] = useState("");

  const store = useContext(StoreContext);
  const { width } = useStore(store)((store) => store.getState("ui"));

  const handleChange = (event) => {
    const trimmedInput = event.target.value.replace(/^\s+/g, "");
    setValue(trimmedInput);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      store.dispatch("history.addLine", { type: "COMMAND", value });
      executeCommand(value, store);
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
