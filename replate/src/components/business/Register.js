import React, { useState, useEffect } from "react";
import { withFormik, Form, Field} from "formik";
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios"

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
    <div className="All">
          <Form>
        <Beef>
          <div>
            <Field className="beef1" type="text" name="username" placeholder="Pick a username" />
            {touched.Username && errors.Username && <p>{errors.Username}</p>}
          </div>

          <div>
            <Field className="beef2" type="text" name="businessName" placeholder="Business Name" />
            {touched.Username && errors.Username && <p>{errors.Username}</p>}
          </div>
          
          <div>
            <Field className="beef3" type="text" name="businessAddress" placeholder="Business Address" />
            {touched.Username && errors.Username && <p>{errors.Username}</p>}
          </div>

          <div>
            <Field className="beef4" type="text" name="businessPhone" placeholder="Business Phone" />
            {touched.Username && errors.Username && <p>{errors.Username}</p>}
          </div>
          
          <div>
            <Field className="beef5" type="password" name="password" placeholder="Password" />
            {touched.Password && errors.Password && <p>{errors.Password}</p>}
          </div>

          <div>
            <Field className="beef6" type="password" name="ConfirmPassword" placeholder="ConfirmPassword" />
            {touched.ConfirmPassword && errors.ConfirmPassword && <p>{errors.ConfirmPassword}</p>}
          </div>         
        </Beef>

        <button type="submit" className="button">SIGN UP</button>

        <div className="signin">
        <span>Already have an account?</span> <a href="">sign in here</a>  
        </div> 
        </Form>
    </div>
  );
};                                                      //^^^ ADD THE LINK RIGHT THERE

const SignUpForm = withFormik({ 
  mapPropsToValues({ Password, ConfirmPassword, Username}) {
    return {
      Username: Username || "",
      Password: Password || "",
      ConfirmPassword: ConfirmPassword || ""
    };
  },

  validationSchema: yup.object({
    Email: yup.string().required('Please enter your email'),
    Password: yup.string().required('Please enter your password'),
    ConfirmPassword: yup.string()
    .oneOf([yup.ref('Password'), null], 'Passwords must match')
    .required('Please confirm your password'),
    Username: yup.string().required('Please enter a username'),

    
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
