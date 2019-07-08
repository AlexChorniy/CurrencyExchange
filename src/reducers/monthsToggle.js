import * as moment from 'moment';

const month = moment.months().filter(
	(item, index) => (index === moment().months() ? item : null),
);

const monthsToggleInf = (store = `${month}`, { type, payload }) => {
	switch (type) {
		case 'MONTHS_TOGGLE_UPDATE':
			return payload;
		default:
		return store;
	}
};

export default monthsToggleInf;
