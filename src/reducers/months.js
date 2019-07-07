import * as moment from 'moment';

const yearsInf = (store = [], { type }) => {
	switch (type) {
		case 'MONTH_UPDATE':
			return moment.months().map((elem, index) => ({ id: `${index < 9 ? '0' : ''}${index + 1}`, txt: elem }));
		default:
		return store;
	}
};

export default yearsInf;
