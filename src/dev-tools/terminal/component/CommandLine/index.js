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

    if (event.keyCode === 37) {
      textAreaRef.current.selectionStart < 9 && (textAreaRef.current.selectionStart = 8) && event.preventDefault();
      textAreaRef.current.selectionEnd < 9 && (textAreaRef.current.selectionEnd = 8) && event.preventDefault();
    }

    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault();
    }

    if (event.metaKey) {
      event.preventDefault();
    }
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    textAreaRef.current.focus();
  };

  const handlePromptClick = () => {
    textAreaRef.current.focus();
  };

  useEffect(() => {
    setTextAreaHeight(textAreaRef, hiddenTextAreaRef);
  }, [value, width]);

  useEffect(() => {
    textAreaRef.current.focus();
    textAreaRef.current.selectionStart = 8;
    textAreaRef.current.selectionEnd = 8;
  }, []);

  return (
    <View style={{ ...styles.view, ...style }}>
      <View style={styles.prompt} onClick={handlePromptClick}>
        DEV-OS:{" "}
      </View>
      <textarea
        style={styles.textArea}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}
        ref={textAreaRef}
        rows={1}
        spellCheck={false}
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
