import { CHOOSE_CURRENCY, CONVERT_UAH_TO_USD, CONVERT_UAH_TO_EUR } from '../constants/actionTypes';
import initialState from '../store/initialState';

function chooseCurrencyReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_CURRENCY:
    {
      const newCurrency = state.currency.map((item) => {
        if (item.value === action.payload.currency) {
          return Object.assign({}, item, { checked: true });
        }
        return Object.assign({}, item, { checked: false });
      });

      const newCurrencyState = Object.assign({}, state, { currency: newCurrency });
      return newCurrencyState;
    }

    case CONVERT_UAH_TO_USD:
    {
      const choosedCurrency = state.currency.map((item) => {
        if (item.value === action.payload.value) {
          return initialState.flightVariants.map(flight => Object.assign(
            {},
            flight,
            { price: Math.round(flight.price / action.payload.UAHPerUSD) },
          ));
        }
        return initialState.flightVariants;
      });

      return Object.assign({}, state, { flightVariants: choosedCurrency[1] });
    }

    case CONVERT_UAH_TO_EUR:
    {
      const choosedCurrency = state.currency.map((item) => {
        if (item.value === action.payload.value) {
          return initialState.flightVariants.map(flight => Object.assign(
            {},
            flight,
            { price: Math.round(flight.price / action.payload.UAHPerEUR) },
          ));
        }
        return state.flightVariants.map(flight => Object.assign(
          {},
          flight,
          { price: flight.price },
        ));
      });

      return Object.assign({}, state, { flightVariants: choosedCurrency[2] });
    }

    default:
      return state;
  }
}

export default chooseCurrencyReducer;
