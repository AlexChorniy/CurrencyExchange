import * as moment from 'moment';

const yearsToggleInf = (store = moment().year(), { type, payload }) => {
	switch (type) {
		case 'YEARS_TOGGLE_UPDATE':
			return payload;
		default:
		return store;
	}
};

export default yearsToggleInf;
