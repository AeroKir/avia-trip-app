import { FLIGHT_CONDITION_CHOICE } from '../constants/actionTypes';
import initialState from '../store/initialState';

function flightConditionsReducer(state = initialState, action) {
  switch (action.type) {
    case FLIGHT_CONDITION_CHOICE:
    {
      const newFligtCondition = state.flightSearchConditions.map((item) => {
        if (item.value === action.payload.value) {
          return Object.assign({}, item, { checked: action.payload.checked });
        }
        return item;
      });
      const newFlightConditionState = Object.assign({}, state, { flightSearchConditions: newFligtCondition });
      return newFlightConditionState;
    }
    default:
      return state;
  }
}

export default flightConditionsReducer;
