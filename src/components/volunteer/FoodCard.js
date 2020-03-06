import React from "react";

const FoodCard = props => {
    return (
        <div>
            <div className="card">
                <h2>Food Type: {props.donor.foodType}</h2>
                <h3>lbs Of Food: {props.donor.lbsOfFood}</h3>
                <h3>Preferred Pickup Time: {props.donor.preferredPickupTime}</h3>
                <h2>Business Name:{props.donor.businessName}</h2>
                <h3>Business Address: {props.donor.businessAddress}</h3>
                <h4>Business Phone: {props.donor.businessPhone}</h4>
            </div>
        </div>
    )
}

export default FoodCard;