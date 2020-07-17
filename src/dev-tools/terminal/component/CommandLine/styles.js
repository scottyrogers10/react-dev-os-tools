import { css } from "@library/styles";

export default {
  view: {
    position: "relative",
    display: "flex",
    flex: 1,
  },
  prompt: {
    position: "absolute",
    top: 0,
    left: 0,
    ...css.userSelect.none,
  },
  textArea: {
    height: "21px",
    minHeight: "100%",
    width: "100%",
    border: "none",
    overflow: "hidden",
    wordBreak: "break-all",
    padding: "0px",
    outline: "none",
    backgroundColor: "transparent",
    color: "#89ff00",
    resize: "none",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "monospace",
    lineHeight: 1.5,
  },
  hiddenTextArea: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: "-1000",
    minHeight: "0px",
    maxHeight: "none",
    height: "0px",
    visibility: "hidden",
  },
};
