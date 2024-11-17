import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import covidReducer from './Reducer';

const store = createStore(covidReducer, applyMiddleware(thunk));

export default store;
