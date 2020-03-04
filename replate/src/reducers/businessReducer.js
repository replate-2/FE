import {
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_FAIL
} from '../actions/index';

const initialState = {
    isFetching: false,
    business: {
        id: 4,
        username: "Business4",
        password: "password",
        businessName: "Business4",
        businessAddress: "234 S. Street",
        businessPhone: "1234567890"
    },
    errors: ''
}

export const businessReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                isFetching: true,
                errors: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                business: action.payload,
                isFetching: false,
                errors: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.payload
            }
        default:
            return state
    }
}