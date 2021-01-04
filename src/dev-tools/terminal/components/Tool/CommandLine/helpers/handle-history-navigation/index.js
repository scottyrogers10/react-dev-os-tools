import handleDownArrowKeyPress from "./handle-down-arrow-key-press";
import handleUpArrowKeyPress from "./handle-up-arrow-key-press";
import keys from "../key-types-map";

export default ({ event, navigation, setNavigation, setValue, value }) => {
	const terminalStorage = JSON.parse(localStorage.getItem("dev-os-terminal")) || {};
	const commandHistory = terminalStorage.commandHistory || [];

	if (event.keyCode === keys.UP_ARROW)
		handleUpArrowKeyPress({ commandHistory, navigation, setNavigation, setValue, value });
	if (event.keyCode === keys.DOWN_ARROW)
		handleDownArrowKeyPress({ commandHistory, navigation, setNavigation, setValue });

	event.preventDefault();
};
