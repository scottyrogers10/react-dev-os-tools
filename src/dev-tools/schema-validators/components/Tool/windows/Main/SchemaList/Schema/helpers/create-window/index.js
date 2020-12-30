import { Details } from "@@schemaValidators/components/Tool/windows";

export default ({ devOS, event, schema }) => {
  const position = {
    x: event.clientX - 120,
    y: event.clientY + 24,
  };

  devOS.createWindow({
    component: (props) => Details({ ...props, schema }),
    minSize: { height: 150, width: 550 },
    position,
    size: { height: 300, width: 600 },
    title: schema.name,
    type: "SCHEMA_VALIDATORS_DETAILS",
  });
};
