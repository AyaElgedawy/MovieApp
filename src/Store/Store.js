import { applyMiddleware, combineReducers, createStore } from 'redux';
// import FavReducer from '../Store/Reducers/FavReducer';
import reducers from "./Reducers/compineReducers";
import {composeWithDevTools} from "redux-devtools-extension";
import { thunk } from 'redux-thunk';
import MoviesReducer from './Reducers/MoviesReducer';

 const myStore = createStore(reducers, composeWithDevTools
    (applyMiddleware(thunk)))
    // const myStore = createStore(MoviesReducer, composeWithDevTools())
export default myStore




