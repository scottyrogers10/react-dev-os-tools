import { colors } from "@library/styles";

export default {
  view: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    overflowY: "auto",
    overflowX: "hidden",
  },
  textarea: {
    flex: 1,
    fontSize: "16px",
    fontWeight: 600,
    color: colors.gray[200],
    padding: "16px",
    minHeight: "0px",
    minWidth: "0px",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    resize: "none",
  },
};
