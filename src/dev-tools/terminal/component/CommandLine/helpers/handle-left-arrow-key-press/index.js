export default (event, textAreaRef) => {
  const elem = textAreaRef.current;

  if (elem) {
    let start = elem.selectionStart;
    let end = elem.selectionEnd;

    start < 9 && (start = 8) && event.preventDefault();
    end < 9 && (end = 8) && event.preventDefault();
  }
};
