import React, { useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { editBusiness, deleteBusiness } from "../../actions/index"

const EditBusiness = props => {
    const [editBiz, setEditBiz ] = useState({
        businessName: '',
        businessAddress: '',
        businessPhone: ''
    })

    const inputHandler = e => {
        e.preventDefault();
        setEditBiz({ ...editBiz, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.editBusiness(editBiz);
    }

    const deleteHandler = e => {
        e.preventDefault();
        props.deleteBusiness();
    }

    return (
        <div>
            <form id="volEdit">
                <label htmlFor="businessName">Edit Business Name</label>
                <input 
                    type="text"
                    name="businessName"
                    label="businessName"
                    value={props.businessName}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="businessAddress">Edit Business Address</label>
                <input 
                    type="text"
                    name="businessAddress"
                    label="businessAddress"
                    value={props.businessAddress}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="businessPhone">Edit Business Phone Number</label>
                <input 
                    type="text"
                    name="businessPhone"
                    label="businessPhone"
                    value={props.businessPhone}
                    onChange={inputHandler}
                    className="input"
                />
                <button onClick={submitHandler} className="btn">Edit Profile</button>
                <button onClick={deleteHandler} className="btn"><Link to="/Business/SignIn">Delete Profile</Link></button>
            </form>
            <button><Link to="/Business/Profile">Back To Profile</Link></button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        business: state.vol.business,
        errors: state.vol.errors
    }
}

export default connect(
    mapStateToProps,
    { editBusiness, deleteBusiness }
)(EditBusiness);