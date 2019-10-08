import { combineReducers } from 'redux';
import { stat } from 'fs';
import showFlights from './showFlights';
import chooseCurrencyReducer from './chooseCurrencyReducer';
import initialState from '../store/initialState';

// import { CHOOSE_UAH_CURRENCY, CHOOSE_USD_CURRENCY, CHOOSE_EUR_CURRENCY } from '../constants/actionTypes';

// export const initialState = {
//   currency: [
//     {
//       id: 'input-currency-uah',
//       name: 'currency',
//       value: 'uah',
//       label: 'UAH',
//       checked: true,
//     },
//     {
//       id: 'input-currency-usd',
//       name: 'currency',
//       value: 'usd',
//       label: 'USD',
//       checked: false,
//     },
//     {
//       id: 'input-currency-eur',
//       name: 'currency',
//       value: 'eur',
//       label: 'EUR',
//       checked: false,
//     },
//   ],
// };

export function chooseCurrency(newState) {
  console.log(newState);
  return {
    type: 'CHOOSE_CURRENCY',
    payload: newState,
  };
}

export function flightConditionChoice(checked, value) {
  return {
    type: 'FLIGHT_CONDITION_CHOICE',
    payload: {
      checked,
      value,
    },
  };
}

// export function chooseUAHCurrency() {
//   return {
//     type: CHOOSE_UAH_CURRENCY,
//     payload: {
//       currencyHTMLEntitySymbol: '&#8372;',
//       checked: true,
//     },
//   };
// }

// export function chooseUSDCurrency() {
//   return {
//     type: CHOOSE_USD_CURRENCY,
//     payload: {
//       currencyHTMLEntitySymbol: '&#36;',
//       checked: true,
//     },
//   };
// }

// export function chooseEURCurrency() {
//   return {
//     type: CHOOSE_EUR_CURRENCY,
//     payload: {
//       currencyHTMLEntitySymbol: '&#8364;',
//       checked: true,
//     },
//   };
// }


// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'CHOOSE_CURRENCY':
//       return { ...state, checked: initialState.currency.filter(item => item.checked) };
//     default:
//       return state;
//   }
// }


// export function rootReducer(state = initialState, action) {
//   console.log(state);
//   switch (action.type) {
//     case 'CHOOSE_CURRENCY':
//       console.log('yes');
//       const newCurrency = state.currency.map((item) => {
//         if (item.checked === action.payload) {
//           console.log(item.checked);
//           return Object.assign({}, item, { checked: !action.payload });
//         }
//         return Object.assign({}, item, { checked: action.payload });;
//       });
//       console.log(newCurrency);
//       const newCurrencyState = Object.assign({}, state, { currency: newCurrency });
//       return newCurrencyState;
//     // return { ...state, checked: action.payload };
//     default:
//       return state;
//   }
// }


export function rootReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case 'CHOOSE_CURRENCY':
      const newCurrency = state.currency.map((item) => {
        if (item.value === action.payload) {
          console.log(item.checked);
          return Object.assign({}, item, { checked: true });
        }
        return Object.assign({}, item, { checked: false });
      });
      const newCurrencyState = Object.assign({}, state, { currency: newCurrency });
      return newCurrencyState;

    case 'FLIGHT_CONDITION_CHOICE':
      const newFligtCondition = state.flightSearchConditions.map((item) => {
        const { checked } = item;
        // const isChecked = item.value === action.payload.value ? action.payload.checked : item;
        // console.log(isChecked);

        if (item.value === action.payload.value) {
          return Object.assign({}, item, { checked: action.payload.checked });
        }

        return item;
        // const option = action.payload;
        // console.log(option);
        // const { checked } = item;
        // console.log(item.checked);
        // return Object.assign({}, item, { checked: isChecked });

        // return { ...item, checked: isChecked };
      });
      const newFlightConditionState = Object.assign({}, state, { flightSearchConditions: newFligtCondition });
      return newFlightConditionState;

    default:
      return state;
  }
}

// const rootReducer = combineReducers({
//   chooseCurrencyReducer,
//   showFlights,
// });

// export default rootReducer;
