import {
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_FAIL,
    EDIT_DATA,
    EDIT_SUCCESS,
    EDIT_FAIL,
    DELETE_DATA,
    DELETE_SUCCESS,
    DELETE_FAIL
} from '../actions/index';

const initialState = {
    isFetching: false,
    business: [],
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
            case EDIT_DATA:
                return {
                    ...state,
                    business: state.id,
                    isEditing: true,
                    errors: ''
                }
            case EDIT_SUCCESS:
                return {
                    ...state,
                    business: action.payload,
                    isEditing: false,
                    errors: ''
                }
            case EDIT_FAIL:
                return {
                    ...state,
                    isEditing: false,
                    errors: action.payload
                }
            case DELETE_DATA:
                return {
                    ...state,
                    business: state.id,
                    isDeleting: true,
                    errors: ''
                }
            case DELETE_SUCCESS:
                return {
                    ...state,
                    business: action.payload,
                    isDeleting: false,
                    errors: ''
                }
            case DELETE_FAIL:
                return {
                    ...state,
                    isDeleting: false,
                    errors: action.payload
                }
        default:
            return state
    }
}