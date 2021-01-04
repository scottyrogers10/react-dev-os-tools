import { colors, css } from "@library/styles";

export default {
	view: {
		color: colors.white,
		backgroundColor: colors.yellow[900],
		borderRadius: "4px",
		fontWeight: 700,
		padding: "0px 8px",
		...css.userSelect.none,
	},
};
