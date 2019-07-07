const currencyInf = (store = [], { type, payload }) => {
	switch (type) {
		case 'CURRENCY_UPDATE_FROM_API':
			return payload;
		default:
		return store;
	}
};

export default currencyInf;
