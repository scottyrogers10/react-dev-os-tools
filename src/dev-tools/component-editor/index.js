import component from "@@componentEditor/component";
import icon from "@@componentEditor/icon";

export default {
  author: "Scotty Rogers",
  createdDate: "11/7/2020",
  description: "Edit react components directly in the browser.",
  icon,
  label: "Component Editor",
  version: "0.0.1",
  window: {
    component,
    size: { width: 260, height: 150 },
    title: "Component Editor",
    type: "COMPONENT_EDITOR",
  },
};
