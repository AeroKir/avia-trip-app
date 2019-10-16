import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import loggerMiddleware from '../middleware/logger';

// import curRate from '../services/privatbank';
import { fetchFlights } from '../actions/requestFlights';


fetch('../data/tickets.json')
  .then(response => console.log(response.json()));
// .then(json => console.log(json));

// const EXCHANGE_RATE_API_URL = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
// fetch(EXCHANGE_RATE_API_URL)
//   .then(response => response.json())
//   .then(data => data);

// function configureStore(preloadedState) {
//   const middlewares = [loggerMiddleware, thunkMiddleware];
//   const middlewareEnhancer = applyMiddleware(...middlewares);

//   const enhancers = [middlewareEnhancer];
//   const composedEnhancers = composeWithDevTools(...enhancers);

//   const store = createStore(rootReducer, initialState, preloadedState, composedEnhancers);

//   return store;
// }

// const store = configureStore();
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
