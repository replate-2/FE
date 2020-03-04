import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"
import { axiosWithAuth } from "../../utils/axiosWithAuth"

const Beef = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const SignUpForm = () => {
  const [signUpBiz, setSignUpBiz] = useState({
    username: "",
    password: "",
    businessName: "",
    businessAddress: "",
    businessPhone: ""
  })

const history = useHistory();

const handleChange = e => {
  e.preventDefault();
  setSignUpBiz({
      ...signUpBiz, [e.target.name]: e.target.value
  })
}

const handleSubmit = e => {
  e.preventDefault();
  axiosWithAuth()
    .post("api/auth/business/register", signUpBiz)
    .then(res => {
      console.log(res)
      window.localStorage.setItem('token', res.data.payload)
      history.push("/Business/SignIn")
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
          value={signUpBiz.username}
          onChange={handleChange}
          required
          />

          <label htmlFor="password">Password</label>
          <input 
          type="password"
          id="password"
          name="password"
          value={signUpBiz.password}
          onChange={handleChange}
          required
          />

          <label htmlFor="businessName">Business Name</label>
          <input 
          type="text"
          id="businessName"
          name="businessName"
          value={signUpBiz.businessName}
          onChange={handleChange}
          required
          />

          <label htmlFor="businessAddress">Business Address</label>
          <input 
          type="text"
          id="businessAddress"
          name="businessAddress"
          value={signUpBiz.businessAddress}
          onChange={handleChange}
          required
          />

          <label htmlFor="businessPhone">Business Phone</label>
          <input 
          type="text"
          id="businessPhone"
          name="businessPhone"
          value={signUpBiz.businessPhone}
          onChange={handleChange}
          required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
export default SignUpForm;
