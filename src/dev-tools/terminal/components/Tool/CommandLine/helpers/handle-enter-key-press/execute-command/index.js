import internalCommands from "@@terminal/commands";
import print from "./print";

export default (input, store) => {
	const externalCommands = store.getState("commands");
	const formattedInput = input.trim();
	const [command] = formattedInput.split(" ");

	const allCommands = { ...externalCommands, ...internalCommands };
	allCommands[command]({ input: formattedInput, print: print(store) });
};
