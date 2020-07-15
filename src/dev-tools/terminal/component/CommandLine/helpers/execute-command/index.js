import includedCommands from "@@terminal/included-commands";
import print from "./print";

export default (input, store) => {
  const externalCommands = store.getState("commands");
  const formattedInput = input.trim();
  const [command] = formattedInput.split(" ");

  const allCommands = { ...externalCommands, ...includedCommands };
  allCommands[command]({ input: formattedInput, print: print(store) });
};
