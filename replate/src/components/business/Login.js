import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom"
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const Beef = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignInForm = () => {
  const [signInBiz, setSignInBiz] = useState({
    username: "",
    password: ""
  });

  const history = useHistory();

  const handleChange = e => {
    e.preventDefault();
    setSignInBiz({
      ...signInBiz,
      [e.target.name]: e.target.value
    });
  };


const handleSubmit = e => {
  e.preventDefault();
  axiosWithAuth()
    .post("api/auth/business/login", signInBiz)
    .then(res => {
      console.log(res)
      window.localStorage.setItem('token', res.data.token)
      window.localStorage.setItem('id', res.data.id)
      setTimeout(() => {
      history.push("/Business/Profile")
      }, 2000)
    })
    .catch(err => {
      console.log(err)
    })
}

  return (
    <div className="cont">
      <Beef>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="username"
              placeholder="username"
              name="username"
              value={signInBiz.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="beef2">
            <input
              type="password"
              placeholder="password"
              id="password"
              name="password"
              value={signInBiz.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className='formbutton' type="submit">Submit</button>

          <div className='sb'>
          <span>Dont have an account yet? <Link className='link' to="/Business/Signup">Sign up here!</Link></span>
          </div>

        </form>
      </Beef>
    </div>
  );
};

export default SignInForm;
