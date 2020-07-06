import component from "./component";

export default {
  label: "Screen Logger",
  configs: {
    component,
    contextMenu: {
      width: 180,
      items: [
        { label: "Capture", onClick: () => console.log("CAPTURE") },
        { label: "Record", onClick: () => console.log("RECORD") },
      ],
    },
    size: { width: 300, height: 200 },
    title: "Screen Logger",
  },
};
