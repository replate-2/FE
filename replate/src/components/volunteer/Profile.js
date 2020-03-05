import React, {useEffect} from "react"
import { connect } from "react-redux"

import { fetchVolunteer } from "../../actions/volunteer"

const VolunteerProfile = props => {

    useEffect(() => {
        props.fetchVolunteer()
    }, [])
    
    console.log(props)
    return <div>
        <h1>Welcome</h1>
        <p>{props.volunteer.username}</p>
        <p>{props.volunteer.name}</p>
        <p>{props.volunteer.phoneNumber}</p>
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