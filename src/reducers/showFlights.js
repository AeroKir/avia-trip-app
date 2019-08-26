import CURRENCY_CONFIG from '../config/currency-config';
import FLIGHT_SEARCH_CONDITIONS from '../config/flight-search-conditions';

import { chooseUAHCurrency, chooseUSDCurrency, chooseEURCurrency } from '../actions/chooseCurrency';

const initialState = {
  asideBlock: {
    FLIGHT_SEARCH_CONDITIONS,
  },
  mainBlock: [],
};

const showFlights = (state = initialState, action) => {
  switch (action) {
    case chooseUAHCurrency:
      return Object.assign({}, state, { checked: action.checked });
    case chooseUSDCurrency:
      return Object.assign({}, state, { checked: action.checked });
    case chooseEURCurrency:
      return Object.assign({}, state, { checked: action.checked });
    default:
      return state;
  }
};

console.log(showFlights());

export default showFlights;
