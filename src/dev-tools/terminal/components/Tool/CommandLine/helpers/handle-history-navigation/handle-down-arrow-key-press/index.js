export default ({ commandHistory, navigation, setNavigation, setValue }) => {
	const nextOffset = navigation.offset - 1;
	const nextCommand = commandHistory[nextOffset];

	if (nextOffset === -1) {
		setValue(navigation.cachedVal);
		setNavigation({ cachedVal: "", offset: nextOffset });
	}

	if (nextCommand) {
		setValue(nextCommand);
		setNavigation({ offset: nextOffset });
	}
};
