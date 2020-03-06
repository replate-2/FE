import { axiosWithAuth } from "../utils/axiosWithAuth"

const volunteerId = window.localStorage.getItem('id')

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const fetchVolunteer = () => dispatch => {

    axiosWithAuth()
        .get(`/api/users/volunteer/${volunteerId}`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAIL, payload: err})
        })
}

export const EDIT_DATA = "EDIT_DATA";
export const EDIT_SUCCESS = "EDIT_SUCCESS"
export const EDIT_FAIL = "EDIT_FAIL"
export const editVolunteer = volunteer => dispatch => {
    dispatch({ type: EDIT_DATA })

    axiosWithAuth()
        .put(`api/users/volunteer/${volunteerId}`, volunteer)
        .then(res => {
            console.log(res.data);
            dispatch({ type: EDIT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: EDIT_FAIL, payload: err })
        })
}