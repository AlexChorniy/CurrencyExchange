const yearsInf = (store = [], { type, payload }) => {
	switch (type) {
		case 'YEARS_UPDATE':
			return payload.map(
				(elem, index) => ({ id: index + 1, txt: elem }),
			);
		default:
		return store;
	}
};

export default yearsInf;
