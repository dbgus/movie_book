import { combineReducers } from "redux";
import def from './modules/default'
import detail from './modules/detail'
import setting from './modules/Setting'

export default combineReducers({
    detail,
    def,
    setting
})