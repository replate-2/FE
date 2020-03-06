import React, { useState } from "react";
import { connect } from "react-redux"

import { addFoodRequest } from "../../actions/index"

const PickupForm = props => {
    return <div></div>
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