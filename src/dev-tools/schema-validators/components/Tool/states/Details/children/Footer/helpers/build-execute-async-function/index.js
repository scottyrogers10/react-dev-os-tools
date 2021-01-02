export default (params, schema) => {
  return () => {
    const formattedParams = Object.entries(params).reduce((prevVal, [key, param]) => {
      //TODO: convert value to type.
      prevVal[key] = param.value;
      return prevVal;
    }, {});

    return schema.executeAsync(formattedParams);
  };
};
