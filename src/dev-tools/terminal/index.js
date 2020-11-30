import { Icon, Tool } from "@@terminal/components";
import store from "@@terminal/store";

export default (options = {}) => {
  const commands = options?.commands || {};
  const terminalStore = store.create();

  return {
    author: "Scotty Rogers",
    createdDate: "7/5/2020",
    description: "Extendable terminal like tool that allows devs to create and use custom commands.",
    icon: Icon,
    label: "Terminal",
    version: "0.2.1",
    window: {
      component: (props) => Tool({ ...props, commands, store: terminalStore }),
      size: { width: 700, height: 350 },
      title: "Terminal",
      type: "TERMINAL",
      events: {
        onResize: (dimensions) => terminalStore.dispatch("ui.resizeWidth", dimensions.size.width),
      },
    },
  };
};
