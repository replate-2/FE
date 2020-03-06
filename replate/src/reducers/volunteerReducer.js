import {
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_FAIL, 
    EDIT_DATA,
    EDIT_SUCCESS,
    EDIT_FAIL
} from '../actions/volunteer';

const initialState = {
    isFetching: false,
    volunteer: [],
    errors: ''
}

export const volunteerReducer = (state = initialState,  action) => {
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
                volunteer: action.payload,
                isFetching: false,
                errors: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.payload
            }
        case EDIT_DATA:
            return {
                ...state,
                volunteer: state.id,
                isEditing: true,
                errors: ''
            }
        case EDIT_SUCCESS:
            return {
                ...state,
                volunteer: action.payload,
                isEditing: false,
                errors: ''
            }
        case EDIT_FAIL:
            return {
                ...state,
                isEditing: false,
                errors: action.payload
            }
        default:
            return state
    }
}