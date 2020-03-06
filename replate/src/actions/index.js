import { axiosWithAuth } from  "../utils/axiosWithAuth"

const businessId = window.localStorage.getItem('id')

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const fetchBusiness = () => dispatch => {
    
    axiosWithAuth()
        .get(`api/users/business/${businessId}`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAIL, payload: err })
        })
}

export const EDIT_DATA = "EDIT_DATA";
export const EDIT_SUCCESS = "EDIT_SUCCESS"
export const EDIT_FAIL = "EDIT_FAIL"
export const editBusiness = business => dispatch => {
    dispatch({ type: EDIT_DATA })

    axiosWithAuth()
        .put(`api/users/business/${businessId}`, business)
        .then(res => {
            console.log(res.data);
            dispatch({ type: EDIT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: EDIT_FAIL, payload: err })
        })
}

export const DELETE_DATA = "DELETE_DATA";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAIL = "DELETE_FAIL";
export const deleteBusiness = business => dispatch => {
    dispatch({ type: DELETE_DATA })

    axiosWithAuth()
        .delete(`api/users/business/${businessId}`, business)
        .then(res => {
            console.log(res);
            dispatch({ type: DELETE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: DELETE_FAIL, payload: err })
        })
}

export const POST_DATA = "POST_DATA"
export const POST_SUCCESS = "POST_SUCCESS"
export const POST_FAIL = "POST_FAIL"
export const addFoodRequest = food => dispatch => {
    dispatch({ type: POST_DATA })

    axiosWithAuth()
        .post(`api/food`, food)
        .then(res => {
            console.log(res.data);
            dispatch({ type: POST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: POST_FAIL, payload: err })
        })
}