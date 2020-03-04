import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom"
import * as yup from "yup";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/axiosWithAuth"



const Beef = styled.div`
  display: flex;
  flex-direction: column;
`;


const SignInForm = () => {
  const [signInBiz, setSignInBiz] = useState({
    username: "",
    password: "",
  })

const history = useHistory();

const handleChange = e => {
  e.preventDefault();
  setSignInBiz({
      ...signInBiz, [e.target.name]: e.target.value
  })
}

const handleSubmit = e => {
  e.preventDefault();
  axiosWithAuth()
    .post("api/auth/business/login", signInBiz)
    .then(res => {
      console.log(res)
      window.localStorage.setItem('token', res.data.payload)
      history.push("/Business/Profile")
    })
    .catch(err => {
      console.log(err)
    })
}

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input 
          type="text"
          id="username"
          name="username"
          value={signInBiz.username}
          onChange={handleChange}
          required
          />

          <label htmlFor="password">Password</label>
          <input 
          type="password"
          id="password"
          name="password"
          value={signInBiz.password}
          onChange={handleChange}
          required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignInForm
