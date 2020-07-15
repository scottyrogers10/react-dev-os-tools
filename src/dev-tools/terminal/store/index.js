import { Store } from "generic-data-chamber";
// Store Types //
import commands from "./commands";
import history from "./history";
import ui from "./ui";

const store = new Store({ name: "terminal", types: { commands, history, ui } });
export default store;
