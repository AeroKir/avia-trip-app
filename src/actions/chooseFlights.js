import { FLIGHT_CONDITION_CHOICE } from '../constants/actionTypes';

function flightConditionChoice(checked, value) {
  return {
    type: FLIGHT_CONDITION_CHOICE,
    payload: {
      checked,
      value,
    },
  };
}

export default flightConditionChoice;
