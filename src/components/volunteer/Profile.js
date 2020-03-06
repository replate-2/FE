import React, {useEffect} from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import FoodCard from "./FoodCard"

import { fetchVolunteer, fetchFood } from "../../actions/volunteer"

const VolunteerProfile = props => {

    useEffect(() => {
        props.fetchVolunteer()
        props.fetchFood()
    }, [])
    
    return <div>
        <h1>Welcome {props.volunteer.username}</h1>
        <h2>Your Name: {props.volunteer.name}</h2>
        <p>Your Phone Number: {props.volunteer.phoneNumber}</p>
        <button><Link to="/volunteer/edit">Edit Profile</Link></button>
        <h1>Current Pickup Requests</h1>
        <div className = "card-container">
            {props.food.map(donor => (
                <FoodCard donor={donor}/>
            ))}
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        volunteer: state.vol.volunteer,
        isFetching: state.vol.isFetching,
        errors: state.vol.errors,
        food: state.donation.food,
        isFetching: state.donation.isFetching,
        errors: state.donation.errors
    }
}

export default connect(
    mapStateToProps,
    { fetchVolunteer, fetchFood }
)(VolunteerProfile)