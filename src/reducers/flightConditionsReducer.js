import { FLIGHT_CONDITION_CHOICE } from '../constants/actionTypes';
import initialState from '../store/initialState';

function flightConditionsReducer(state = initialState, action) {
  switch (action.type) {
    case FLIGHT_CONDITION_CHOICE:
    {
      const allFlightsItem = state.flightSearchConditions.filter(i => i.value === 'transfer-all');
      console.log(allFlightsItem);

      const otherFlights = state.flightSearchConditions.filter(i => i.value !== 'transfer-all');
      console.log(otherFlights);

      const all = allFlightsItem.concat(otherFlights);
      console.log(all);


      const newFligtCondition = state.flightSearchConditions.map((item) => {
        // Common case
        if (item.value === action.payload.value) {
          return Object.assign({}, item, { checked: action.payload.checked });
        }

        // if (action.payload.value === 'transfer-all' && item.checked !== action.payload.checked) {
        //   return Object.assign(
        //     {},
        //     item,
        //     {
        //       checked: action.payload.checked,
        //     },
        //   );
        // }

        // 1-st case
        if (action.payload.value === 'transfer-all') {
          return Object.assign(
            {},
            item,
            { checked: action.payload.checked },
          );
        }

        // 2-nd case
        if (action.payload.value !== 'transfer-all' && item.value === 'transfer-all' && item.checked) {
          return Object.assign(
            {},
            item,
            { checked: action.payload.checked },
          );
        }

        // if (item.checked && item.value !== 'transfer-all' && action.payload.value === item.value) {
        //   return Object.assign(
        //     {},
        //     item,
        //     { checked: action.payload.checked },
        //   );
        // }
        
        console.log(item);
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
