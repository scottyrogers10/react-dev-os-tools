import { colors } from "@library/styles";

export default {
	input: {
		backgroundColor: colors.gray[750],
		border: "3px solid transparent",
		color: colors.gray[300],
		width: "100%",
		padding: "0 4px",
	},
	focus: (isFocused) => {
		return (
			isFocused && {
				border: `3px solid ${colors.blue[400]}`,
				borderRadius: "3px",
			}
		);
	},
};
