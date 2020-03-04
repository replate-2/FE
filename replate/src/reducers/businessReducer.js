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
        default:
            return state
    }
}