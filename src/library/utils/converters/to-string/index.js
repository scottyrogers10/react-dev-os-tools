export default (value, defaultValue = "") => {
	if (value !== null && value !== undefined && value.toString().length > 0) {
		return value.toString();
	}

	return defaultValue;
};
