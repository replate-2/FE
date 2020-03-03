import React from "react"
import {BrowserRouter as Router, Link} from "react-router-dom"
import "./dashboard.css"

const Dashboard = () =>{
    return (
            <div className="mainContainer">
                <h2>Are you a Buisness or a Volunteer?</h2>
                <div className="buttonContainer">
                    <div className="buisnessContainer">
                        <button><Link to="/PlaceholderUrlBuisness">Buisness</Link></button>
                    </div>
                    <div className="volunteerContainer">
                    <button><Link to="/volunteer/login">Volunteer</Link></button>
                    </div>
                </div>
            </div>
    )
}

export default Dashboard