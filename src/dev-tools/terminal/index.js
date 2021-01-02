import { Icon, Tool } from "@@terminal/components";

export default (options = {}) => {
	const commands = options?.commands || {};

	return {
		author: "Scotty Rogers",
		createdDate: "7/5/2020",
		description: "Extendable terminal like tool that allows devs to create and use custom commands.",
		icon: Icon,
		label: "Terminal",
		version: "0.2.2",
		window: {
			component: (props) => Tool({ ...props, commands }),
			minSize: { height: 200, width: 340 },
			size: { width: 700, height: 350 },
			title: "Terminal",
			type: "TERMINAL",
		},
	};
};
