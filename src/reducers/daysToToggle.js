import * as moment from 'moment';

const dayToday = moment().format('MM');

const daysToggleInf = (store = dayToday, { type, payload }) => {
	switch (type) {
		case 'DAYS_TOGGLE_UPDATE':
			return payload;
		default:
		return store;
	}
};

export default daysToggleInf;
