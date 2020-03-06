import React, {useEffect} from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { fetchVolunteer } from "../../actions/volunteer"

const VolunteerProfile = props => {

    useEffect(() => {
        props.fetchVolunteer()
    }, [])
    
    console.log(props)
    return <div>
        <h1>Welcome {props.volunteer.username}</h1>
        <h2>Your Name: {props.volunteer.name}</h2>
        <p>Your Phone Number: {props.volunteer.phoneNumber}</p>
        <button><Link to="/volunteer/edit">Edit Profile</Link></button>
        </div>
}

const mapStateToProps = state => {
    return {
        volunteer: state.vol.volunteer,
        isFetching: state.vol.isFetching,
        errors: state.vol.errors
    }
}

export default connect(
    mapStateToProps,
    { fetchVolunteer }
)(VolunteerProfile)