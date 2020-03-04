import React from "react"
import { connect } from "react-redux"

import { fetchBusiness } from "../../actions"

const BusinessProfile = props => {
    return <div>Welcome To Your Business Profile</div>
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