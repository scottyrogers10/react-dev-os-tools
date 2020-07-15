import component from "@@terminal/component";
import store from "@@terminal/store";

const getTool = (commands = {}) => {
  const terminalStore = store.create();

  return {
    label: "Terminal",
    configs: {
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
