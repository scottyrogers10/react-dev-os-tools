export default ({ prevState }, commands) => {
  return { ...prevState, ...commands };
};
