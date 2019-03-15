import Axios from "axios";

const GET_DETAIL = 'module/detail/GET_DETAIL'
const GET_DETAIL_SUCCESS = 'module/detail/GET_DETAIL_SUCCESS'
const CLEAR = 'module/detail/CLEAR'

export const getDetail = (data) => ({ type: GET_DETAIL, data })
export const getDetailSuccess = () => ({ type: GET_DETAIL_SUCCESS })
export const clear = () => ({ type: CLEAR })


const initialState = {
    data: null,
    status: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_DETAIL:
            return {
                ...state,
                data: action.data
            }
        case GET_DETAIL_SUCCESS:
            return {
                ...state,
                status: true
            }
        case CLEAR:
            return {
                ...state,
                data: [],
                status: false
            }

        default:
            return state
    }
}

export const detailReqeust = (id) => (dispatch) => {
    Axios.get(`https://yts.am/api/v2/movie_details.json?movie_id=${id}`)
        .then(res => {
            dispatch(getDetail(res.data.data.movie))
            dispatch(getDetailSuccess())
        })
}