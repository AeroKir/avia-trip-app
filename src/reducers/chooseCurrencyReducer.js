import { CHOOSE_UAH_CURRENCY, CHOOSE_USD_CURRENCY, CHOOSE_EUR_CURRENCY } from '../constants/actionTypes';
// import initialState from '../store/initialState';

const initialState = {
  currency: [
    {
      id: 'input-currency-uah',
      name: 'currency',
      value: 'uah',
      label: 'UAH',
      checked: true,
    },
    {
      id: 'input-currency-usd',
      name: 'currency',
      value: 'usd',
      label: 'USD',
      checked: false,
    },
    {
      id: 'input-currency-eur',
      name: 'currency',
      value: 'eur',
      label: 'EUR',
      checked: false,
    },
  ],
};

function chooseCurrencyReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_UAH_CURRENCY:
      return state;
    case CHOOSE_USD_CURRENCY:
      return { ...state, checked: action.payload.checked };
    case CHOOSE_EUR_CURRENCY:
      return { ...state, checked: action.payload.checked };
    default:
      return state;
  }
}

export default chooseCurrencyReducer;
