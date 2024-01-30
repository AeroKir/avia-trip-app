import { RECEIVE_FLIGHTS_MOCK, FLIGHT_CONDITION_CHOICE } from '../constants/actionTypes';
import initialState from '../store/initialState';

function flightConditionsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_FLIGHTS_MOCK:
    {
      const tickets = action.payload;
      const stopsQuantityList = tickets.map(ticket => ticket.stops);
      const isAllStopsQuantityEqual = stopsQuantityList.every(val => val === stopsQuantityList[0]);
      const maxQuantity = Math.max(...stopsQuantityList);
      const minQuantity = Math.min(...stopsQuantityList);

      const createStopsFilter = (stopsQuantity) => {
        let flightStopsFilter;
        if (isAllStopsQuantityEqual || stopsQuantityList.length === 1) {
          flightStopsFilter = [];
        } else {
          flightStopsFilter = [
            {
              id: 'input-transfer-all',
              name: 'transfer',
              value: 'transfer-all',
              label: 'Усі',
              checked: true,
              stops: 'all',
            },
          ];
        }

        for (let i = minQuantity; i <= stopsQuantity; i += 1) {
          let stopLabelInRussian;
          if (i === 0) {
            stopLabelInRussian = 'Без пересадок';
          }
          if (i === 1) {
            stopLabelInRussian = `${i} пересадка`;
          }
          if (i >= 2 && i <= 4) {
            stopLabelInRussian = `${i} пересадки`;
          }
          if (i > 4) {
            stopLabelInRussian = `${i} пересадок`;
          }
          flightStopsFilter.push({
            id: `input-transfer_${i}`,
            name: 'transfer',
            value: `transfer_${i}`,
            label: `${stopLabelInRussian}`,
            checked: true,
            stops: i,
          });
        }

        return flightStopsFilter;
      };

      return Object.assign({}, state, { flightSearchConditions: createStopsFilter(maxQuantity) });
    }

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
