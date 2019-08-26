import { combineReducers } from 'redux';
import showFlights from './showFlights';
import chooseCurrencyReducer from './chooseCurrencyReducer';

const rootReducer = combineReducers({
  chooseCurrencyReducer,
  showFlights,
});

export default rootReducer;
