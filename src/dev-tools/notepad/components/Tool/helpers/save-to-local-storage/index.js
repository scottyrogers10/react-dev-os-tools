import getLocalStorageValue from "../get-local-storage-value";

export default (index, updatedNote) => {
	const notes = getLocalStorageValue();
	notes[index] = updatedNote;
	localStorage.setItem("dev-os-notepad", JSON.stringify({ notes }));
};
