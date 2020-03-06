import React, { useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { editVolunteer } from "../../actions/volunteer"

const EditVolunteer = props => {
    const [editVol, setEditVol ] = useState({
        username: '',
        name: '',
        phoneNumber: ''
    })

    const inputHandler = e => {
        e.preventDefault();
        setEditVol({ ...editVol, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.editVolunteer(editVol);
    }

    return (
        <div>
            <form id="volEdit">
                <label htmlFor="username">Edit Username</label>
                <input 
                    type="text"
                    name="username"
                    label="username"
                    value={props.username}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="name">Edit Name</label>
                <input 
                    type="text"
                    name="name"
                    label="name"
                    value={props.name}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="phoneNumber">Edit Phone Number</label>
                <input 
                    type="text"
                    name="phoneNumber"
                    label="phoneNumber"
                    value={props.phoneNumber}
                    onChange={inputHandler}
                    className="input"
                />
                <button onClick={submitHandler} className="btn"><Link to="/volunteer/profile">Edit Profile</Link></button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        volunteer: state.vol.volunteer,
        errors: state.vol.errors
    }
}

export default connect(
    mapStateToProps,
    { editVolunteer }
)(EditVolunteer);