import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext, View } from "@library/ui";
import { useMergeState, useStore } from "@library/hooks";
import { handleEnterKeyPress, handleHistoryNavigation, handleLeftArrowKeyPress, keyTypesMap as key, setTextAreaHeight } from "./helpers";
import styles from "./styles";

const CommandLine = ({ style }) => {
  const textAreaRef = useRef(null);
  const hiddenTextAreaRef = useRef(null);
  const [navigation, setNavigation] = useMergeState({ cachedVal: "", offset: -1 });
  const [value, setValue] = useState("");

  const store = useContext(StoreContext);
  const { width } = useStore(store)((store) => store.getState("ui"));

  const handleChange = (event) => {
    const trimmedInput = event.target.value.replace(/^\s+/g, "");
    setValue(trimmedInput);
  };

  const handleKeyDown = (event) => {
    if (event.metaKey) event.preventDefault();
    if (event.keyCode === key.ENTER) handleEnterKeyPress({ event, setNavigation, setValue, store, value });
    if (event.keyCode === key.LEFT_ARROW) handleLeftArrowKeyPress(event, textAreaRef);
    if (event.keyCode === key.UP_ARROW || event.keyCode === key.DOWN_ARROW)
      handleHistoryNavigation({ event, navigation, setNavigation, setValue, value });
  };

  const handleMouseDown = (event) => {
    textAreaRef.current.focus();
    event.preventDefault();
  };

  const handlePromptClick = () => {
    textAreaRef.current.focus();
  };

  useEffect(() => {
    setTextAreaHeight(textAreaRef, hiddenTextAreaRef);
  }, [value, width]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
      textAreaRef.current.selectionStart = 8;
      textAreaRef.current.selectionEnd = 8;
    }
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
