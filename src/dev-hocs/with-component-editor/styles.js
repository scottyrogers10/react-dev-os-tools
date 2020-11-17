import { colors } from "@library/styles";

export default {
  view: {
    position: "relative",
    display: "inline-block",
  },
  outline: (isHovered) => {
    return (
      isHovered && {
        border: `2px solid ${colors.orange[400]}`,
        borderRadius: "2px",
        margin: "-2px",
      }
    );
  },
  editor: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    boxSizing: "border-box",
    verticalAlign: "baseline",
    lineHeight: "1.5",
    border: 0,
    margin: 0,
    padding: "12px",
    color: colors.gray[50],
    whiteSpace: "pre",
    display: "block",
    unicodeBidi: "embed",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "monospace",
  },
};
