import component from "@@tasks/component";
import icon from "@@tasks/icon";

const getTool = (items = []) => {
  return {
    author: "Scotty Rogers",
    createdDate: "10/14/2020",
    description: "List of executable tasks in the app.",
    icon,
    label: "Tasks",
    version: "1.0.0",
    window: {
      component: (props) => component({ ...props, items }),
      size: { width: 700, height: 400 },
      title: "Tasks",
      type: "TASKS",
    },
  };
};

export default (options = {}) => {
  const { items = [] } = options;
  return items.length > 0 ? () => getTool(items) : getTool();
};
