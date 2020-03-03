import React, {useState} from "react"
import "./register.css"

const VolunteerRegister = () => {
    const [pwd1, setPwd1] = useState(); //first pw input
    const [pwd2, setPwd2] = useState(); //confirmed password input

    const handleSubmit = event =>{
        event.preventDefault();
        if(pwd1 === pwd2){
            //API work here?
            
        } else{
            alert("Your passwords do not match")
        }
    }
    return (
        <div className="registerContainer">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">First and Last name:</label>
                <input id="name" id="name" required></input>

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required></input>

                <label htmlFor="username" >Username:</label>
                <input id="username" required></input>

                <label htmlFor="password" required>Password:</label>
                <input type="password" minlength='8' onChange={event => setPwd1(event.target.value)} required></input>

                <label htmlFor="password">Confirm Password:</label>
                <input type="password" id="confirmPassword" onChange={event => setPwd2(event.target.value)} required></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default VolunteerRegister