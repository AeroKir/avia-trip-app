import { REQUEST_FLIGHTS, RECEIVE_FLIGHTS, RECEIVE_FLIGHTS_MOCK } from '../constants/actionTypes';
import TICKETS from '../data/tickets-array';

// Action creator for mock data
export function getFlightsMock(flights) {
  return {
    type: RECEIVE_FLIGHTS_MOCK,
    payload: flights,
  };
}

export function requestFlightsMock() {
  return dispatch => dispatch(getFlightsMock(TICKETS));
}

export function requestFlights(flights) {
  return {
    type: REQUEST_FLIGHTS,
    payload: flights,
  };
}

export function fetchFlights(url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(flights => dispatch(requestFlights(flights)))
      .catch(() => {});
  };
}
