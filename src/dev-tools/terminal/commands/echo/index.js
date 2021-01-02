export default ({ input, print }) => {
	const value = input.replace(/echo /g, "");
	print(value, { color: "#fff" });
};
