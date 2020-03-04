import React, { useState, useEffect } from "react";
import { withFormik, Form, Field} from "formik";
import * as yup from "yup";
import styled from "styled-components";
import {Link} from "react-router-dom"
import axios from "axios"
import Navigation from "../general/Navigation";


const Beef = styled.div`
  display: flex;
  flex-direction: column;
`;


const SignIn = ({values, errors, touched, status}) => {

  const [user, setUser] = useState([]); 

  useEffect(() => {
    status && setUser(user => [...user, status]);
  }, [status]);

 
  return (
    <div>
    <Navigation />
    
    <div className="All2">
          <Form>
        <Beef>
          <div>
            <Field className="beef2" type="text" name="username" placeholder="Pick a username" />
            {touched.username && errors.username && <p>{errors.username}</p>}
          </div>
          
          <div>
            <Field className="beef2" type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </div>   
        </Beef>

        <button type="submit" className="button">SIGN UP</button>

        <div className="signin">
        <span>Dont have an account? <Link to="/Business/SignUp">Sign up here</Link></span>
        </div> 
        </Form>
    </div>
    </div>
  );
};            

const SignInForm = withFormik({ 
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
   
    };
  },

  validationSchema: yup.object({
    password: yup.string().required('Please enter your password'),
    username: yup.string().required('Please enter a username')

    
  }),
  handleSubmit(values, { setStatus, resetForm }) {    
    console.log("HERE IS YOUR DATA :)", values);

      resetForm(values)
   
   
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log(res);
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }

})(SignIn);

export default SignInForm;
