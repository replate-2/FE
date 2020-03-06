import React, { useState } from "react";
import { connect } from "react-redux"

import { addFoodRequest } from "../../actions/index"

const PickupForm = props => {
    const [foodDonation, setFoodDonation ] = useState({
        foodType: "",
        lbsOfFood: "",
        preferredPickupTime: "",
        businessId: ""
    })

    const inputHandler = e => {
        e.preventDefault()
        setFoodDonation({ ...foodDonation, [e.target.name]: e.target.value })
    }
}

const mapStateToProps = state => {
    return {
        food: state.donation.food,
        errors: state.donation.errors
    }
}

export default connect(
    mapStateToProps,
    { addFoodRequest }
)(PickupForm)