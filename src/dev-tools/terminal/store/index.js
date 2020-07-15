import { Store } from "generic-data-chamber";
// Store Types //
import commands from "./commands";
import ui from "./ui";

const store = new Store({ name: "terminal", types: { commands, ui } });
export default store;
