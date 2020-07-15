import { Store } from "generic-data-chamber";
// Store Types //
import commands from "./commands";
import history from "./history";
import ui from "./ui";

export default {
  create: () => new Store({ name: "terminal", types: { commands, history, ui } }),
};
