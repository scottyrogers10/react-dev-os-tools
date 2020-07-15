export default (textAreaRef, hiddenTextAreaRef) => {
  const textArea = textAreaRef.current;
  const hiddenTextArea = hiddenTextAreaRef.current;

  if (textArea && hiddenTextArea) {
    const scrollHeight = hiddenTextArea.scrollHeight;
    textArea.style.height = `${scrollHeight}px`;
  }
};
