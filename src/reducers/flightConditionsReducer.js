import { FLIGHT_CONDITION_CHOICE } from '../constants/actionTypes';
import initialState from '../store/initialState';

function flightConditionsReducer(state = initialState, action) {
  switch (action.type) {
    case FLIGHT_CONDITION_CHOICE:
    {
      const newFligtCondition = state.flightSearchConditions.map((item) => {
        // Common case
        if (item.value === action.payload.value) {
          return Object.assign({}, item, { checked: action.payload.checked });
        }

        /**
         * 1-st case.
         * If the 'transfer-all' item is checked, each other will be checked.
         * And vice versa.
         */
        if (action.payload.value === 'transfer-all') {
          return Object.assign(
            {},
            item,
            { checked: action.payload.checked },
          );
        }

        /**
         * 2-nd case.
         * If at least one item except 'transfer-all' is unchecked - 'transfer-all' marked as unchecked.
         */
        if (action.payload.value !== 'transfer-all' && item.value === 'transfer-all' && item.checked) {
          return Object.assign(
            {},
            item,
            { checked: action.payload.checked },
          );
        }

        /**
         * 3-rd case.
         * If all items except 'transfer-all' item are checked,
         * and 'transfer-all' unchecked at that moment - set 'transfer-all' checked = true.
         */
        const allFlightsItem = state.flightSearchConditions.find(i => i.value === 'transfer-all');
        const otherFlightsVariants = state.flightSearchConditions.filter(i => i.value !== 'transfer-all');
        const isOtherFlightsChecked = otherFlightsVariants.filter(i => i.checked);

        if (action.payload.value !== 'transfer-all'
            && action.payload.checked
            && isOtherFlightsChecked.length === otherFlightsVariants.length - 1) {
          allFlightsItem.checked = true;
        }

        return item;
      });

      const newFlightConditionState = Object.assign(
        {},
        state,
        { flightSearchConditions: newFligtCondition },
      );
      return newFlightConditionState;
    }
    default:
      return state;
  }
}

export default flightConditionsReducer;
