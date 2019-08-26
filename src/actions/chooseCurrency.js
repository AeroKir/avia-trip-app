import { CHOOSE_UAH_CURRENCY, CHOOSE_USD_CURRENCY, CHOOSE_EUR_CURRENCY } from '../constants/actionTypes';

export const chooseUAHCurrency = {
  type: CHOOSE_UAH_CURRENCY,
  payload: {
    currencyHTMLEntitySymbol: '&#8372;',
    checked: true,
  },
};

export const chooseUSDCurrency = {
  type: CHOOSE_USD_CURRENCY,
  payload: {
    currencyHTMLEntitySymbol: '&#36;',
    checked: true,
  },
};

export const chooseEURCurrency = {
  type: CHOOSE_EUR_CURRENCY,
  payload: {
    currencyHTMLEntitySymbol: '&#8364;',
    checked: true,
  },
};
