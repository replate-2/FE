import React, { useState } from "react"
import { connect } from "react-redux"

import { editVolunteer } from "../../actions"

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
        <div></div>
    )
}

export default EditVolunteer;