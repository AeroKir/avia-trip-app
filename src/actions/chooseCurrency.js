import { CHOOSE_CURRENCY } from '../constants/actionTypes';

export function chooseUAHCurrency() {
  return {
    type: CHOOSE_UAH_CURRENCY,
    payload: {
      currencyHTMLEntitySymbol: '&#8372;',
      checked: true,
    },
  };
}

export function chooseUSDCurrency() {
  return {
    type: CHOOSE_USD_CURRENCY,
    payload: {
      currencyHTMLEntitySymbol: '&#36;',
      checked: true,
    },
  };
}

export function chooseEURCurrency() {
  return {
    type: CHOOSE_EUR_CURRENCY,
    payload: {
      currencyHTMLEntitySymbol: '&#8364;',
      checked: true,
    },
  };
}

function chooseCurrency(newState) {
  return {
    type: CHOOSE_CURRENCY,
    payload: newState,
  };
}

export default chooseCurrency;
