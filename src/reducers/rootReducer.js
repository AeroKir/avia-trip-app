import { combineReducers } from 'redux';
import flightConditionsReducer from './flightConditionsReducer';
import chooseCurrencyReducer from './chooseCurrencyReducer';
import sortFlightsReducer from './sortFlightsReducer';
import requestFlightsReducer from './requestFlightsReducer';
import convertCurrencyReducer from './convertCurrencyReducer';

const rootReducer = combineReducers({
  currency: chooseCurrencyReducer,
  flightSearchConditions: flightConditionsReducer,
  flightSortFilter: sortFlightsReducer,
  flightVariants: requestFlightsReducer,
});

export default rootReducer;
