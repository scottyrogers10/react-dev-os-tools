import { colors } from "@library/styles";

export default {
	view: {
		display: "flex",
		flexDirection: "column",
		borderRight: `1px solid ${colors.gray[700]}`,
		backgroundColor: colors.gray[800],
		overflowY: "auto",
		overflowX: "none",
	},
	tab: (isSelected) => {
		return {
			backgroundColor: isSelected && colors.blue[800],
			height: "28px",
			lineHeight: "28px",
			padding: "0px 16px",
		};
	},
};
