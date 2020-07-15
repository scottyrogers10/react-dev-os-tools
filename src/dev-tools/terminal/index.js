import component from "@terminal/component";
import store from "@terminal/store";

export default {
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
