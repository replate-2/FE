import React from "react"
import "./dashboard.css"

const Dashboard = () =>{
    return (
        <div className="mainContainer">
            <h2>Are you a Buisness or a Volunteer?</h2>
            <div className="buttonContainer">
                <div className="buisnessContainer">
                    <button><a href="#">Buisness</a></button>
                </div>
                <div className="volunteerContainer">
                    <button><a href="#">Volunteer</a></button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard