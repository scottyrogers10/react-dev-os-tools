export default (value, defaultValue = 0) => {
	const convertedValue = parseInt(value, 10);

	if (convertedValue && isFinite(convertedValue)) {
		return convertedValue;
	}

	return defaultValue;
};
