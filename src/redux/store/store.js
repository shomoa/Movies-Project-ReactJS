import {createStore , applyMiddleware} from 'redux'
import { AllMovies } from '../types/moviesType'
import { moviesReducer } from '../reducers/moviesReducer';
import thunk from 'redux-thunk'
//1.create store
export const store= createStore(moviesReducer , applyMiddleware(thunk));