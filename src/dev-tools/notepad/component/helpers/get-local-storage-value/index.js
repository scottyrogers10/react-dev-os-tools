export default () => {
  const notepadStorage = JSON.parse(localStorage.getItem("dev-os-notepad")) || {};
  const notes = notepadStorage.notes || [];

  return notes[0];
};
