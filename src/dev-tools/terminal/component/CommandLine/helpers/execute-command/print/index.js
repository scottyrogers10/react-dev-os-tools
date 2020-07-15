export default (store) => (value, printStyles = {}) => {
  store.dispatch("history.addLine", { printStyles, type: "PRINT", value });
};
