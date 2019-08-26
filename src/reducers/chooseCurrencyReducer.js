import CURRENCY_CONFIG from '../config/currency-config';
import { CHOOSE_UAH_CURRENCY, CHOOSE_USD_CURRENCY, CHOOSE_EUR_CURRENCY } from '../constants/actionTypes';

const initialState = {
  CURRENCY_CONFIG,
};

console.log(initialState);

function chooseCurrencyReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_UAH_CURRENCY:
      return state;
    case CHOOSE_USD_CURRENCY:
      return state;
    case CHOOSE_EUR_CURRENCY:
      return state;
    default:
      return state;
  }
}

export default chooseCurrencyReducer;
