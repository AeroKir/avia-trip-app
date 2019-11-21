import { REQUEST_FLIGHTS, RECEIVE_FLIGHTS_MOCK } from '../constants/actionTypes';
import initialState from '../store/initialState';

function requestFlightsReducer(state = initialState.flightVariants, action) {
  switch (action.type) {
    case REQUEST_FLIGHTS:
    {
      const newFlightsState = Object.assign(
        {},
        state,
        { isReceived: true, flights: action.payload },
      );
      return newFlightsState;
    }

    case RECEIVE_FLIGHTS_MOCK: {
      const newFlightsState = Object.assign(
        {},
        state,
        { isReceived: true, flights: action.payload },
      );
      return newFlightsState;
    }

    default:
      return state;
  }
}

export default requestFlightsReducer;
