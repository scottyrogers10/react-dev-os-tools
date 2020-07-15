import includedCommands from "@@terminal/included-commands";
import store from "@@terminal/store";
import print from "./print";

export default (input) => {
  const externalCommands = store.getState("commands");
  const formattedInput = input.trim();
  const [command] = formattedInput.split(" ");

  const allCommands = { ...externalCommands, ...includedCommands };
  allCommands[command]({ input: formattedInput, print });
};
