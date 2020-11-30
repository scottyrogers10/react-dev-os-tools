import { Icon, Tool } from "@@tasks/components";

export default (options = {}) => {
  const tabs = options?.tabs || [];

  return {
    author: "Scotty Rogers",
    createdDate: "10/14/2020",
    description: "List of executable tasks in the app.",
    icon: Icon,
    label: "Tasks",
    version: "2.0.1",
    window: {
      component: (props) => Tool({ ...props, tabs }),
      minSize: { height: 150, width: 550 },
      size: { height: 400, width: 700 },
      title: "Tasks",
      type: "TASKS",
    },
  };
};
