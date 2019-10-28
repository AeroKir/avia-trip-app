import { combineReducers } from 'redux';
import flightConditionsReducer from './flightConditionsReducer';
import chooseCurrencyReducer from './chooseCurrencyReducer';
import requestFlightsReducer from './requestFlightsReducer';
import convertCurrencyReducer from './convertCurrencyReducer';

const rootReducer = combineReducers({
  currency: chooseCurrencyReducer,
  flightSearchConditions: flightConditionsReducer,
  flightVariants: chooseCurrencyReducer,
});

export default rootReducer;
