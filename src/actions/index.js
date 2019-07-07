import * as moment from 'moment';

export const currencyUpdateFromAPI = arr => ({ type: 'CURRENCY_UPDATE_FROM_API', payload: arr });
export const yearsUpdate = number => ({
type: 'YEARS_UPDATE',
payload: Array(number).fill().map((e, index) => moment().year() - index),
});
export const monthUpdate = number => ({ type: 'MONTH_UPDATE', payload: number });
export const daysUpdate = number => ({ type: 'DAYS_UPDATE', payload: number });
export const yearsToggleUpdate = number => ({ type: 'YEARS_TOGGLE_UPDATE', payload: number });
export const monthsToggleUpdate = string => ({ type: 'MONTHS_TOGGLE_UPDATE', payload: string });
export const daysToggleUpdate = string => ({ type: 'DAYS_TOGGLE_UPDATE', payload: string });
export const currenciesToggleUpdate = string => ({ type: 'CURRENCIES_TOGGLE_UPDATE', payload: string });
