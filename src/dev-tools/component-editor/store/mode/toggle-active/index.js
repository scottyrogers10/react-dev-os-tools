export default ({ prevState }) => {
  return { ...prevState, isActive: !prevState.isActive };
};
