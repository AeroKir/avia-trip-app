import { combineReducers } from 'redux';
import flightConditionsReducer from './flightConditionsReducer';
import chooseCurrencyReducer from './chooseCurrencyReducer';

const rootReducer = combineReducers({
  currency: chooseCurrencyReducer,
  flightSearchConditions: flightConditionsReducer,
});

export default rootReducer;
