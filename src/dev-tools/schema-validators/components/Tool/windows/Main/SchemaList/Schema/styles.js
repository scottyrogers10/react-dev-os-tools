import { css } from "@library/styles";

export default {
  view: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
  },
  info: {
    flex: 1,
    marginLeft: "16px",
    overflow: "hidden",
  },
  name: {
    fontSize: "14px",
    fontWeight: "700",
    ...css.textOverflow.ellipsis,
  },
  description: {
    ...css.textOverflow.ellipsis,
  },
};
