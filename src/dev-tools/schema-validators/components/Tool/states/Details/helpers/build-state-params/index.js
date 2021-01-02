export default (params) => {
	return params.reduce((prevVal, param) => {
		prevVal[param.key] = { type: param.type, value: param.defaultValue };
		return prevVal;
	}, {});
};
