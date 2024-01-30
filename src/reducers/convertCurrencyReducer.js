import { CONVERT_UAH_TO_USD, CONVERT_UAH_TO_EUR } from '../constants/actionTypes';
import initialState from '../store/initialState';

function convertCurrencyReducer(state = initialState, action) {
  switch (action.type) {
    case CONVERT_UAH_TO_USD:
    {
      return state.flightVariants.map((item) => {
        const currencyState = state.currency.map(i => i);
        if (currencyState.checked && currencyState.value === 'usd') {
          return Object.assign({}, item, { price: action.value });
        }
        return state;
      });
      // const priceUSD = state.flightVariants.map(
      //   item => Object.assign({}, item, { price: item.price / action.payload }),
      // );
      // const newPriceState = Object.assign({}, state, { flightVariants: priceUSD });
      // console.log(state.flightVariants);
      // return newPriceState;
    }
    case CONVERT_UAH_TO_EUR:
    {
      const priceEUR = state.flightVariants.map(
        item => Object.assign({}, item, { price: item.price / action.payload }),
      );
      const newPriceState = Object.assign({}, state, { flightVariants: priceEUR });
      return newPriceState;
    }
    default:
      return state;
  }
}

export default convertCurrencyReducer;
