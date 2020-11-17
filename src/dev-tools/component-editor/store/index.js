import { Store } from "generic-data-chamber";
// Store Types //
import devOS from "./dev-os";
import mode from "./mode";

const store = new Store({ name: "componentEditor", types: { devOS, mode } });
export default store;
