import { Icon, Tool } from "@@tasks/components";

const emptyFn = () => {};

export default (options = {}) => {
  const onExecute = options?.onExecute || emptyFn;
  const tabs = options?.tabs || [];

  return {
    author: "Scotty Rogers",
    createdDate: "10/14/2020",
    description: "List of executable tasks in the app.",
    icon: Icon,
    label: "Tasks",
    version: "2.0.2",
    window: {
      component: (props) => Tool({ ...props, onExecute, tabs }),
      minSize: { height: 150, width: 550 },
      size: { height: 400, width: 700 },
      title: "Tasks",
      type: "TASKS",
    },
  };
};
