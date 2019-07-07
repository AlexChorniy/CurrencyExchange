const daysInf = (store = [], { type, payload }) => {
	switch (type) {
		case 'DAYS_UPDATE':
			return Array(payload).fill().map((e, index) => index + 1).map(
                (elem, index) => ({ id: index + 1, txt: index < 9 ? `0${elem}` : elem }),
            );
		default:
		return store;
	}
};

export default daysInf;
