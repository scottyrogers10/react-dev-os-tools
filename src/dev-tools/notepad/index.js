import component from "@@notepad/component";
import icon from "@@notepad/icon";

export default {
  author: "Scotty Rogers",
  createdDate: "7/5/2020",
  description: "A simple note app that allows devs to save local notes.",
  icon,
  label: "Notepad",
  version: "0.1.0",
  window: {
    component,
    size: { width: 700, height: 550 },
    title: "Notepad",
    type: "NOTEPAD",
  },
};
