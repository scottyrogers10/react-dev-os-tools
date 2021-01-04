const respond = ({ data, minDelay, shouldResolve, startTime }) => {
	const endTime = new Date().getTime();
	const delay = minDelay - (endTime - startTime);

	return new Promise((resolve, reject) => {
		if (delay > 0) {
			setTimeout(() => {
				return shouldResolve ? resolve(data) : reject(data);
			}, delay);
		} else {
			return shouldResolve ? resolve(data) : reject(data);
		}
	});
};

export default (asyncFn, minDelay) => {
	const startTime = new Date().getTime();

	return asyncFn()
		.then((result) => {
			return respond({ data: result, minDelay, shouldResolve: true, startTime });
		})
		.catch((error) => {
			return respond({ data: error, minDelay, shouldResolve: false, startTime });
		});
};
