export default ({ commandHistory, navigation, setNavigation, setValue, value }) => {
  const nextOffset = navigation.offset + 1;
  const nextCommand = commandHistory[nextOffset];

  if (navigation.offset === -1) {
    setNavigation({ cachedVal: value });
  }

  if (nextCommand) {
    setValue(nextCommand);
    setNavigation({ offset: nextOffset });
  }
};
