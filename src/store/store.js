import { applyMiddleware, compose, createStore, bindActionCreators } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
// import initialState from './initialState';
import { rootReducer } from '../reducers/rootReducer';
import loggerMiddleware from '../middleware/logger';

import chooseCurrencyReducer from '../reducers/chooseCurrencyReducer';
import { chooseUSDCurrency } from '../actions/chooseCurrency';

// function configureStore(preloadedState) {
//   const middlewares = [loggerMiddleware, thunkMiddleware];
//   const middlewareEnhancer = applyMiddleware(...middlewares);

//   const enhancers = [middlewareEnhancer];
//   const composedEnhancers = composeWithDevTools(...enhancers);

//   const store = createStore(rootReducer, initialState, preloadedState, composedEnhancers);

//   return store;
// }

// const store = configureStore();

// const initialState = {
//   name: 'Ivan',
//   secondName: 'Ivanov',
// };

// const changeName = {
//   type: 'CHANGE_NAME',
//   payload: 'Petya',
// };

// const changeSecondName = {
//   type: 'CHANGE_SECOND_NAME',
//   payload: 'Petrov',
// };

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'CHANGE_NAME':
//       return { ...state, name: action.payload };

//     case 'CHANGE_SECOND_NAME':
//       return { ...state, secondName: action.payload };
//   }
//   return state;
// }

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const dis = store.dispatch(rootReducer);
// console.log(dis);

export default store;
