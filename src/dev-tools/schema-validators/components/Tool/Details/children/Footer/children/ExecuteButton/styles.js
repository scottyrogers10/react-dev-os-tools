import { colors, css } from "@library/styles";

export default {
	view: {
		padding: "0px 16px",
		borderRadius: "3px",
		fontWeight: 600,
		color: colors.white,
		backgroundColor: colors.blue[700],
		cursor: "pointer",
		...css.userSelect.none,
	},
};
