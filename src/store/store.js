import { applyMiddleware, compose, createStore, bindActionCreators } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import loggerMiddleware from '../middleware/logger';

// function configureStore(preloadedState) {
//   const middlewares = [loggerMiddleware, thunkMiddleware];
//   const middlewareEnhancer = applyMiddleware(...middlewares);

//   const enhancers = [middlewareEnhancer];
//   const composedEnhancers = composeWithDevTools(...enhancers);

//   const store = createStore(rootReducer, initialState, preloadedState, composedEnhancers);

//   return store;
// }

// const store = configureStore();

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
