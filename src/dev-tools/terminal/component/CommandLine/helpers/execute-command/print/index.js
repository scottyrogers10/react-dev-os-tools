import store from "@@terminal/store";

export default (value, printStyles = {}) => {
  store.dispatch("history.addLine", { printStyles, type: "PRINT", value });
};
