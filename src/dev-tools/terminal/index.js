import component from "@@terminal/component";
import store from "@@terminal/store";

const terminal = {
  label: "Terminal",
  configs: {
    component,
    size: { width: 700, height: 350 },
    title: "Terminal",
    type: "TERMINAL",
    events: {
      onResize: (dimensions) => store.dispatch("ui.resizeWidth", dimensions.size.width),
    },
  },
};

export default {
  ...terminal,
  addCommands: (commands) => {
    return { ...terminal, configs: { ...terminal.configs, component: (props) => component({ ...props, commands }) } };
  },
};
