import { AllMovies ,MovieApi } from '../types/moviesType';
import axios from 'axios';


///////Middleware -> redux allow seeing parameters on all comp.
export const getAllMovie=()=>{
    return async(dispatch) => {
         const response = await axios.get(MovieApi)
        dispatch({type:AllMovies , data:response.data.results , pages:response.data.total_pages})
    }

}
    export const getMovieSearch=(word)=>{
        return async(dispatch) => {
             const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=7b7259f56aea62df427e29e6a605decb&query=${word}&language=ar-US&page=1&include_adult=false`)
            dispatch({type:AllMovies , data:response.data.results , pages:response.data.total_pages})
        }

    }

    export const getPage=(page)=>{
        return async(dispatch) => {
             const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=7b7259f56aea62df427e29e6a605decb&query=${page}&language=ar-US&page=1&include_adult=false`)
            dispatch({type:AllMovies , data:response.data.results , pages:response.data.total_pages})
        }

    }