import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"


import { fetchBusiness } from "../../actions"

const BusinessProfile = props => {
    

    useEffect(() => {
        props.fetchBusiness()
    }, [])
    
    return <div>
        <h1>Welcome {props.business.businessName}</h1>
        <h2>Your Address: {props.business.businessAddress}</h2>
        <p>Your Phone Number: {props.business.businessPhone}</p>
        <button><Link to="/Business/Edit">Edit Profile</Link></button>
        <h1>Pick Up Requests</h1>
        <button><Link to="/Business/Pickup">Add Pickup Request</Link></button>
        </div>
}

const mapStateToProps = state => {
    return {
        business: state.biz.business,
        isFetching: state.biz.isFetching,
        errors: state.biz.errors
    }
}

export default connect(
    mapStateToProps,
    { fetchBusiness }
)(BusinessProfile)