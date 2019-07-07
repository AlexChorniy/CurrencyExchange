const currenciesToggleInf = (store = 'Choose currency', { type, payload }) => {
	switch (type) {
		case 'CURRENCIES_TOGGLE_UPDATE':
			return payload;
		default:
		return store;
	}
};

export default currenciesToggleInf;
