import React, { useState, useEffect } from "react";
import { withFormik, Form, Field} from "formik";
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios"
import {Link} from "react-router-dom"
import Navigation from "../general/Navigation";


const Beef = styled.div`
  display: flex;
  flex-direction: column;
  
`;






const Signup = ({values, errors, touched, status}) => {

  const [user, setUser] = useState([]); 

  useEffect(() => {
    status && setUser(user => [...user, status]);
  }, [status]);

 


  return (
    <div>
      <Navigation />
    
    <div className="All">
          <Form>
        <Beef>
          <div>
            <Field className="beef1" type="text" name="username" placeholder="Pick a username" />
            {touched.username && errors.username && <p>{errors.username}</p>}
          </div>
 
          <div>
            <Field className="beef1" type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </div>

          <div>
            <Field className="beef1" type="password" name="confirmPassword" placeholder="ConfirmPassword" />
            {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </div>

          <div>
            <Field className="beef1" type="text" name="businessName" placeholder="business name?" />
            {touched.businessName && errors.businessName && <p>{errors.businessName}</p>}
          </div>  

           <div>
            <Field className="beef1" type="text" name="businessAddress" placeholder="Business address" />
            {touched.businessAddress && errors.businessAddress && <p>{errors.businessAddress}</p>}
          </div>   

          <div>
            <Field className="beef1" type="number" name="businessPhone" placeholder="Business phone number" />
            {touched.businessPhone && errors.businessPhone && <p>{errors.businessPhone}</p>}
          </div>  

        </Beef>

        <button type="submit" className="button">SIGN UP</button>

        <div className="signin">
        <span>Already have an account? <Link to="/Business/SignIn">Sign in here</Link></span>  
        </div> 
        </Form>
    </div>
    </div>
  );
};                                                  

const SignUpForm = withFormik({ 
  mapPropsToValues({ username, password, confirmPassword, businessName, businessAddress, businessPhone }) {
    return {
      username: username || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
      businessName: businessName || "",
      businessAddress: businessAddress || "",
      businessPhone: businessPhone || ""
    };
  },

  validationSchema: yup.object({
    username: yup.string().required('Please enter a username'),
    password: yup.string().required('Please enter your password'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
    businessName: yup.string().required('Please enter a name'),
    businessAddress: yup.string().required('Please enter a address'),
    businessPhone: yup.string().required('Please enter a phone number')


    
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
})(Signup);

export default SignUpForm;
