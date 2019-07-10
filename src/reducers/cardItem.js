const cardItem = (store = [], { type, payload }) => {
	switch (type) {
		case 'CHOOSE_CURRENCY':
            return [{ r030: '504E', txt: 'Please choose currency first' }];
        case 'SET_NO_CURRENCY':
            return [{ r030: '304E', txt: 'Such currency doesn\'t exit' }];
        case 'SET_CURRENCY':
            return payload;
		default:
		return store;
	}
};

export default cardItem;
