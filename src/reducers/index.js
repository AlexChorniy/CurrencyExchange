import { combineReducers } from 'redux';

import currency from './currency';
import yearsArr from './years';
import monthArr from './months';
import daysArr from './days';
import yearsToggleInf from './yearsToggle';
import monthsToggleInf from './monthsToggle';
import daysToggleInf from './daysToToggle';
import currenciesToggleInf from './currenciesToggle';
import cardItem from './cardItem';

export default combineReducers({
	daysArr,
	currency,
	yearsArr,
	monthArr,
	cardItem,
	daysToggleInf,
	yearsToggleInf,
	monthsToggleInf,
	currenciesToggleInf,
});
