import React from "react"
import {Link} from "react-router-dom"
import "./login.css"

const VolunteerLogin = () => {
    return (
        <div className="loginContainer">
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>
                <button type="submit">Submit</button>
            </form>
           <h6>Don't have an account yet? <Link to="/volunteer/register">Sign up here!</Link></h6>
        </div>
    )
}

export default VolunteerLogin