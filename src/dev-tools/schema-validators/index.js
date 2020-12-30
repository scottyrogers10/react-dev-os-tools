import { Icon, Tool } from "@@schemaValidators/components";

export default (options) => {
  const tabs = options?.tabs || [];

  return {
    author: "Scotty Rogers",
    createdDate: "12/29/2020",
    description: "List of schemas to be validated on execution.",
    icon: Icon,
    label: "Schema Validators",
    version: "1.0.0",
    window: {
      component: (props) => Tool({ ...props, tabs }),
      minSize: { height: 150, width: 550 },
      size: { height: 400, width: 700 },
      title: "Schema Validators",
      type: "SCHEMA_VALIDATORS",
    },
  };
};
