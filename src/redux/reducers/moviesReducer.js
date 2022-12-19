import { AllMovies } from '../types/moviesType'
const initialValue={Movies:[] ,pageCount:0}
export const moviesReducer=(state=initialValue,action)=>{
    switch(action.type){
        case AllMovies:
            return {Movies: action.data , pageCount:action.pages} //as its names in API
        default: 
         return state;
    }
    }