import Axios from "axios";

const SETTING_SUCCESS = 'module/Setting/SETTING_SUCCESS'


export const settingSuccess = (dataType, data) => ({ type: SETTING_SUCCESS, dataType, data })


const initialState = {
    wishStatus: 'init',
    watchStatus: 'init',
    wishData: [],
    watchData: []
}

export default (state = initialState, action) => {
    switch (action.type) {


        case SETTING_SUCCESS:
            if (action.dataType === 'wish') { //data type check
                if (action.data) { //데이터 유효성 검사
                    return {  //wish 성공
                        ...state,
                        wishStatus: 'success',
                        wishData: action.data
                    }
                }
                else { //wish 실패
                    return {
                        ...state,
                        wishStatus: 'failed',
                        wishData: []
                    }
                }
            }
            else {
                if (action.data) {
                    return { //watch 성공
                        ...state,
                        watchStatus: 'success',
                        watchData: action.data
                    }
                }
                else {
                    return { //watch 실패
                        ...state,
                        watchStatus: 'failed',
                        watchData: []
                    }
                }
            }

        default:
            return state
    }
}


export const SettingRequest = (data, type) => (dispatch) => {
    let SettingData = []
    let id = 1
    if (data) {
        if (typeof data === 'number') {
            Axios
                .get(`https://yts.am/api/v2/movie_details.json?movie_id=${data}`)
                .then(res => {
                    const data = [id, res.data.data.movie.title, res.data.data.movie.medium_cover_image]
                    SettingData.push(data)
                    id++
                    dispatch(settingSuccess(type, SettingData))
                })
        }
        else {
            data.forEach(el => {
                Axios
                    .get(`https://yts.am/api/v2/movie_details.json?movie_id=${el}`)
                    .then(res => {
                        const data = [id, res.data.data.movie.title, res.data.data.movie.medium_cover_image]
                        id++
                        SettingData.push(data)
                    })
            });
            dispatch(settingSuccess(type, SettingData))
        }
    }
}