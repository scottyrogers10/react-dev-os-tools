import { toInt, toString } from "@library/utils/converters";

const typeMap = {
	integer: toInt,
	string: toString,
};

export default (params, schema) => {
	return () => {
		const formattedParams = Object.entries(params).reduce((prevVal, [key, param]) => {
			prevVal[key] = typeMap[param.type](param.value);
			return prevVal;
		}, {});

		return schema.executeAsync(formattedParams);
	};
};
