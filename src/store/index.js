import { combineReducers } from "redux";
import def from './modules/default'
import detail from './modules/detail'

export default combineReducers({
    detail,
    def,
})