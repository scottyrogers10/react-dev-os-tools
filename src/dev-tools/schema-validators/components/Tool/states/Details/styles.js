import { colors } from "@library/styles";

export default {
  view: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    boxSizing: "border-box",
    verticalAlign: "baseline",
    lineHeight: "1.5",
    border: 0,
    margin: 0,
    padding: 0,
    color: colors.gray[50],
    fontSize: "12px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  },
  edit: {
    flex: 1,
  },
};
