import { CHOOSE_CURRENCY } from '../constants/actionTypes';
import initialState from '../store/initialState';

function chooseCurrencyReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_CURRENCY:
      const newCurrency = state.currency.map((item) => {
        if (item.value === action.payload) {
          return Object.assign({}, item, { checked: true });
        }
        return Object.assign({}, item, { checked: false });
      });
      const newCurrencyState = Object.assign({}, state, { currency: newCurrency });
      return newCurrencyState;
    default:
      return state;
  }
}

export default chooseCurrencyReducer;
