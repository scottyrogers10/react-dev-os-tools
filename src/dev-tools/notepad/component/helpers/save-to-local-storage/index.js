export default (updatedNote) => {
  localStorage.setItem("dev-os-notepad", JSON.stringify({ notes: [updatedNote] }));
};
