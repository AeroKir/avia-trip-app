import { TOGGLE_FLIGHTS_SORT_FILTER } from '../constants/actionTypes';
import initialState from '../store/initialState';

function sortFlightsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FLIGHTS_SORT_FILTER:
    {
      const newState = state.flightSortFilter.map((item) => {
        if (item.value === action.payload.value) {
          return Object.assign({}, item, { checked: true });
        }
        return Object.assign({}, item, { checked: false });
      });

      const newSortFilterState = Object.assign({}, state, { flightSortFilter: newState });
      return newSortFilterState;
    }
    default:
      return state;
  }
}

export default sortFlightsReducer;
