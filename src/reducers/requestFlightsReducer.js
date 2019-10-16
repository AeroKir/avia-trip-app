import { REQUEST_FLIGHTS, RECEIVE_FLIGHTS_MOCK } from '../constants/actionTypes';
import initialState from '../store/initialState';

function requestFlightsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_FLIGHTS:
    {
      const newFlightsState = Object.assign({}, state, { flightVariants: action.payload });
      return newFlightsState;
    }

    case RECEIVE_FLIGHTS_MOCK: {
      const newFlightsState = Object.assign({}, state, { flightVariants: action.payload });
      return newFlightsState;
    }

    default:
      return state;
  }
}

export default requestFlightsReducer;
