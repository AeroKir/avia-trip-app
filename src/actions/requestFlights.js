import { REQUEST_FLIGHTS } from '../constants/actionTypes';

function requestFlights(flights) {
  return {
    type: REQUEST_FLIGHTS,
    payload: flights,
  };
}

export default requestFlights;
