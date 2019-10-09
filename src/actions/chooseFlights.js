function flightConditionChoice(checked, value) {
  return {
    type: 'FLIGHT_CONDITION_CHOICE',
    payload: {
      checked,
      value,
    },
  };
}

export default flightConditionChoice;
