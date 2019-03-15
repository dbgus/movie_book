import Axios from "axios";
const GET_MOVIE = 'module/default/GET_MOVIE';
const GET_MOVIE_SUCCESS = 'module/default/GET_MOVIE_SUCEESS';
const GET_MOVIE_DETAILE = 'module/default/GET_MOVIE_DETAILE'

export const getMovie = () => ({ type: GET_MOVIE })
export const getMovieSuccess = (data) => ({ type: GET_MOVIE_SUCCESS, data })
export const getMOvieDetaile = (detail) => ({ type: GET_MOVIE_DETAILE, detail })

const initialState = {
    status: 'init',
    data: [],
    detail: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_MOVIE:
            return {
                ...state,
                status: 'loading'

            }
        case GET_MOVIE_SUCCESS:
            let newData = state.data.concat(action.data)
            return {
                ...state,
                status: 'success',
                data: newData
            }
        case GET_MOVIE_DETAILE:
            return {
                ...state,
                data: [],
                detail: action.detail
            }
        default:
            return state
    }
}

export const movieRequest = (page) => (dispatch) => {
    Axios.get(`https://yts.am/api/v2/list_movies.json?limit=9&page=${page}`)
        .then(res => {
            dispatch(getMovie())
            dispatch(getMovieSuccess(res.data.data.movies))
        })
}

export const scrollReqeuest = (status, page) => (dispatch) => {
    if (status === 'success') {
        Axios.get(`https://yts.am/api/v2/list_movies.json?limit=9&page=${page}`)
            .then(res => {
                dispatch(getMovie())
                dispatch(getMovieSuccess(res.data.data.movies))
            })
    }
}
