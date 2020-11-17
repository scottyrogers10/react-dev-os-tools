export default ({ prevState }, createWindow = () => {}) => {
  return { ...prevState, createWindow };
};
