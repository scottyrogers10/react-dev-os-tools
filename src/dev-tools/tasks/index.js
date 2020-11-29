import { Tool } from "@@tasks/components";
import icon from "@@tasks/icon";

export default (options = {}) => {
  const { tabs = [] } = options;

  return {
    author: "Scotty Rogers",
    createdDate: "10/14/2020",
    description: "List of executable tasks in the app.",
    icon,
    label: "Tasks",
    version: "2.0.0",
    window: {
      component: (props) => Tool({ ...props, tabs }),
      minSize: { height: 150, width: 550 },
      size: { height: 400, width: 700 },
      title: "Tasks",
      type: "TASKS",
    },
  };
};
