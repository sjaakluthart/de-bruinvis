/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] */
/* global window */
import { createStore } from 'redux';
import rootReducer from './reducers/root';

const store = createStore(
  rootReducer,
  process.env.NODE_ENV !== 'test' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
