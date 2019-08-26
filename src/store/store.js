import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

import { chooseUSDCurrency } from '../actions/chooseCurrency';

const store = createStore(rootReducer);

const dis = store.dispatch(chooseUSDCurrency);
console.log(dis);

export default store;
