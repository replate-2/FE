import { combineReducers } from 'redux';
import { businessReducer } from "./businessReducer";
import { volunteerReducer } from "./volunteerReducer";
import { foodReducer } from "./foodReducer"

export default combineReducers({
    biz: businessReducer,
    vol: volunteerReducer,
    donation: foodReducer
});