import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom"
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
      <div className='cont2'>
        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          id="username"
          placeholder="Username"
          name="username"
          value={signUpBiz.username}
          onChange={handleChange}
          required
          />

          
          <input 
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          value={signUpBiz.password}
          onChange={handleChange}
          required
          />

          
          <input 
          type="text"
          id="businessName"
          placeholder="Business name"
          name="businessName"
          value={signUpBiz.businessName}
          onChange={handleChange}
          required
          />

          
          <input 
          type="text"
          id="businessAddress"
          placeholder="Business Address"
          name="businessAddress"
          value={signUpBiz.businessAddress}
          onChange={handleChange}
          required
          />

          
          <input 
          type="text"
          id="businessPhone"
          name="businessPhone"
          value={signUpBiz.businessPhone}
          placeholder="Business Phone Number"
          onChange={handleChange}
          required
          />

          <button className='formbutton' type="submit">Submit</button>

          <div className='sb'>
          <span>Already have an account? <Link className='link' to="/Business/SignIn">Sign in here!</Link></span>
          </div>

        </form>
      </div>
    </div>
  )
}
export default SignUpForm;
