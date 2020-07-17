const execute = (fnStr) => {
  const fn = new Function(fnStr);
  return JSON.stringify(fn());
};

export default ({ input, print }) => {
  const value = input.replace(/js /g, "").trim();
  const fn = `return ${value}`;
  print(execute(fn), { color: "#fff" });
};
