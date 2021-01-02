import { css } from "@library/styles";

export default {
	view: {
		display: "flex",
		alignItems: "center",
		padding: "12px 16px",
	},
	info: {
		flex: 1,
		overflow: "hidden",
		paddingRight: "16px",
	},
	name: {
		fontSize: "13px",
		fontWeight: "700",
		...css.textOverflow.ellipsis,
	},
	description: {
		...css.textOverflow.ellipsis,
	},
};
