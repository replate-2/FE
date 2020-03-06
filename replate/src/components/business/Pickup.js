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

    const submitHandler = e => {
        e.preventDefault();
        props.addFoodRequest(foodDonation);
    }

    return (
        <div>
            <form id="foodRequest">
                <label htmlFor="foodType">Food Type</label>
                <input 
                    type="text"
                    name="foodType"
                    label="foodType"
                    placeholder="Food Type"
                    value={props.foodType}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="lbsOfFood">Food lbs</label>
                <input 
                    type="integer"
                    name="lbsOfFood"
                    label="lbsOfFood"
                    placeholder="Food lbs"
                    value={props.lbsOfFood}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="preferredPickupTime">Preferred Pickup Time</label>
                <input 
                    type="date"
                    name="preferredPickupTime"
                    label="preferredPickupTime"
                    placeholder="Preferred Pickup Time"
                    value={props.preferredPickupTime}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="businessId">Business id</label>
                <input 
                    type="integer"
                    name="businessId"
                    label="businessId"
                    placeholder="Business id"
                    value={props.businessId}
                    onChange={inputHandler}
                    className="input"
                />
                <button onClick={submitHandler} className="btn">Add Pickup Request</button>
            </form>
        </div>
    )
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