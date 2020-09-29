import component from "@@terminal/component";
import icon from "@@terminal/icon";
import store from "@@terminal/store";

const getTool = (commands = {}) => {
  const terminalStore = store.create();

  return {
    author: "Scotty Rogers",
    createdDate: "7/5/2020",
    description: "Extendable terminal like tool that allows devs to create and use custom commands.",
    icon,
    label: "Terminal",
    version: "0.2.0",
    window: {
      component: (props) => component({ ...props, commands, store: terminalStore }),
      size: { width: 700, height: 350 },
      title: "Terminal",
      type: "TERMINAL",
      events: {
        onResize: (dimensions) => terminalStore.dispatch("ui.resizeWidth", dimensions.size.width),
      },
    },
  };
};

export default (options = {}) => {
  const { commands = {} } = options;
  return Object.values(commands).length > 0 ? () => getTool(commands) : getTool();
};
