import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import { axiosWithAuth } from "../../utils/axiosWithAuth"
import "./register.css"

const VolunteerRegister = () => {
    const [pwd1, setPwd1] = useState(); //first pw input
    const [pwd2, setPwd2] = useState(); //confirmed password input
    const [signUpVol, setSignUpVol] = useState({
        username: "",
        password: "",
        name: "",
        phoneNumber: ""
    })

    const history = useHistory();

    const handleChange = e => {
        e.preventDefault();
        setSignUpVol({
            ...signUpVol, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = event =>{
        event.preventDefault();
        if(pwd1 === pwd2){
            axiosWithAuth()
                .post("api/auth/volunteer/register", signUpVol)
                .then(res => {
                    console.log(res)
                    window.localStorage.setItem('token', res.data.payload)
                    history.push("/volunteer/login")
                })
                .catch(err => {
                    console.log(err.message)
                })
        } else{
            alert("Your passwords do not match")
        }
    }
    return (
        <div>
            <div className="registerContainer">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">First and Last name:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={signUpVol.name} 
                    onChange={handleChange} 
                    required
                    />

                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                    type="text" 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    value={signUpVol.phoneNumber} 
                    onChange={handleChange} 
                    required
                    />

                    <label htmlFor="username" >Username:</label>
                    <input 
                    type="text" 
                    id="username" 
                    name="username"
                    value={signUpVol.username} 
                    onChange={handleChange} 
                    required
                    />

                    <label htmlFor="password" required>Password:</label>
                    <input 
                    type="password"
                    id="password"
                    name="password" 
                    minlength='8' 
                    value={signUpVol.password} 
                    onChange={handleChange}
                    required={event => setPwd1(event.target.value)}
                    />

                    {/* <label htmlFor="password">Confirm Password:</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password"
                    onChange="" 
                    required={event => setPwd2(event.target.value)}
                    /> */}

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default VolunteerRegister