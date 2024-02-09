import { combineReducers } from "redux";
import FavReducer from "./FavReducer";
import MoviesReducer from "./MoviesReducer";


export default combineReducers({
    combineFav: FavReducer,
    combineMovies: MoviesReducer
})