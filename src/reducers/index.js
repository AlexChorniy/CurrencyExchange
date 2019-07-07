import { combineReducers } from 'redux';

import currency from './currency';
import yearsArr from './years';
import monthArr from './months';
import daysArr from './days';
import yearsToggleInf from './yearsToggle';
import monthsToggleInf from './monthsToggle';
import daysToggleInf from './daysToToggle';
import currenciesToggleInf from './currenciesToggle';

export default combineReducers({
	currency,
	yearsArr,
	monthArr,
	daysArr,
	yearsToggleInf,
	monthsToggleInf,
	daysToggleInf,
	currenciesToggleInf,
});
