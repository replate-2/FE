import {
    POST_DATA,
    POST_SUCCESS,
    POST_FAIL
} from "../actions/index"

const initialState = {
    food: [],
    isPosting: false,
    errors: ''
}

 export const foodReducer = (state = initialState, action) => {
    switch(action.type){
        case POST_DATA:
            return {
                ...state,
                food: {
                    foodType: "",
                    lbsOfFood: 0,
                    preferredPickupTime: "",
                    businessId: 0
                },
                isPosting: true,
                errors: ''
            }
        case POST_SUCCESS:
            return {
                ...state,
                food: action.payload,
                isPosting: false,
                errors: ''
            }
        case POST_FAIL: 
            return {
                ...state,
                isPosting: false,
                errors: action.payload
            }
        default:
            return state
    }
}