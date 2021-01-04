import { Results } from "@@schemaValidators/components/Tool/states";

export default ({ devOS, event, executeAsync, schema }) => {
	const position = {
		x: event.clientX - 300,
		y: event.clientY - 180,
	};

	devOS.createWindow({
		component: (props) => Results({ ...props, executeAsync }),
		minSize: { height: 150, width: 550 },
		position,
		size: { height: 400, width: 700 },
		title: `${schema.name} - Results`,
		type: "SCHEMA_VALIDATORS_RESULTS",
	});
};
