import React from "react"
import "./register.css"

const VolunteerRegister = () => {
    return (
        <div className="registerContainer">
            <form>
                <label htmlFor="name">First and Last name:</label>
                <input id="name" id="name"></input>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
                <label htmlFor="username">Username:</label>
                <input id="username" id="username"></input>
                <label htmlFor="password">Password:</label>
                <input type="password"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default VolunteerRegister