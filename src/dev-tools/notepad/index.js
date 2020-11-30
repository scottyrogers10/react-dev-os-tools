import { Icon, Tool } from "@@notepad/components";

export default () => {
  return {
    author: "Scotty Rogers",
    createdDate: "7/5/2020",
    description: "A simple note app that allows devs to save local notes.",
    icon: Icon,
    label: "Notepad",
    version: "0.1.1",
    window: {
      component: Tool,
      minSize: { height: 350, width: 550 },
      size: { width: 700, height: 550 },
      title: "Notepad",
      type: "NOTEPAD",
    },
  };
};
