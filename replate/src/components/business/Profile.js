import React, { useEffect } from "react"
import { connect } from "react-redux"


import { fetchBusiness } from "../../actions"

const BusinessProfile = props => {
    

    useEffect(() => {
        props.fetchBusiness()
    }, [])
    console.log(props)
    return <div>
        <h1>Welcome</h1>
        <p>{props.business.businessName}</p>
        <p>{props.business.businessAddress}</p>
        <p>{props.business.businessPhone}</p>
        </div>
}

const mapStateToProps = state => {
    return {
        business: state.business,
        isFetching: state.isFetching,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps,
    { fetchBusiness }
)(BusinessProfile)