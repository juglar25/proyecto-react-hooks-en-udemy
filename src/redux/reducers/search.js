import {get} from 'lodash'
import {
    SEARCH_MOVIE_START,
    SEARCH_MOVIE_ERROR,
    SEARCH_MOVIE_COMPLETE,
    SEARCH_MOVIE_BY_START,
    SEARCH_MOVIE_BY_COMPLETE,
    SEARCH_MOVIE_BY_ERROR
} from "../../consts/actionTypes";

const initialState = {};

export default function (state = initialState, action){

    switch (action.type){
        case SEARCH_MOVIE_START:
            return {...state, isLoading: true};
            break;
        case SEARCH_MOVIE_ERROR:
            return {...state, isLoading: true, movieResults: null};
            break;
        case SEARCH_MOVIE_COMPLETE:
            return {...state, isLoading: true, movieResults: action.results.data};
            break;
        case SEARCH_MOVIE_BY_START:
            return {...state, isLoading: true, movieResult: null};
            break;
        case SEARCH_MOVIE_BY_ERROR:
            return {...state, isLoading: true, movieResult: null};
            break;
        case SEARCH_MOVIE_BY_COMPLETE:
            return {...state, isLoading: true, movieResult: action.movie.data};
            break;
        default:
            return {...state};

    }
}