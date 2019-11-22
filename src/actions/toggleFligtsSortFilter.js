import { TOGGLE_FLIGHTS_SORT_FILTER } from '../constants/actionTypes';

function toggleFlightsSortFilter(value) {
  return {
    type: TOGGLE_FLIGHTS_SORT_FILTER,
    payload: { value },
  };
}

export default toggleFlightsSortFilter;
