import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import showFlights from './showFlights';
import chooseCurrencyReducer from './chooseCurrencyReducer';

const rootReducer = combineReducers({
  formReducer,
  chooseCurrencyReducer,
  showFlights,
});

export default rootReducer;
