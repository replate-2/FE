import React, { useState } from "react"
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom"
import { axiosWithAuth } from "../../utils/axiosWithAuth"
import "./login.css"

const VolunteerLogin = () => {
    const [volLogin, setVolLogin] = useState({
        username: "",
        password: ""
    })

    const history = useHistory()

    const handleChange = e => {
        e.preventDefault();
        setVolLogin({
            ...volLogin, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(`api/auth/volunteer/login`, volLogin)
            .then(res => {
                console.log(res);
                window.localStorage.setItem('token', res.data.token)
                window.localStorage.setItem('id', res.data.id)
                setTimeout(() => {
                history.push("/volunteer/profile")
                }, 2000)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className="loginContainer">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text"
                        name="username"
                        label="username"
                        value={volLogin.username}
                        onChange={handleChange}
                        className="input"
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        name="password"
                        label="password"
                        value={volLogin.password}
                        onChange={handleChange}
                        className="input"
                    />
                    <button type="submit">Submit</button>
                </form>
            <h6>Don't have an account yet? <Link to="/volunteer/register">Sign up here!</Link></h6>
            </div>
        </div>
    )
}

export default VolunteerLogin