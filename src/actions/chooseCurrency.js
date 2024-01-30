import { CHOOSE_CURRENCY } from '../constants/actionTypes';

function chooseCurrency(currency) {
  return {
    type: CHOOSE_CURRENCY,
    payload: { currency },
  };
}

export default chooseCurrency;
