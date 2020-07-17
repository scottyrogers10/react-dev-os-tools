import executeCommand from "./execute-command";

export default ({ event, setNavigation, setValue, store, value }) => {
  const terminalStorage = JSON.parse(localStorage.getItem("dev-os-terminal")) || {};
  const commandHistory = terminalStorage.commandHistory || [];

  store.dispatch("history.addLine", { type: "COMMAND", value });
  localStorage.setItem("dev-os-terminal", JSON.stringify({ commandHistory: [value, ...commandHistory].slice(0, 100) }));
  setNavigation({ cachedVal: "", offset: -1 });
  executeCommand(value, store);
  setValue("");
  event.preventDefault();
};
