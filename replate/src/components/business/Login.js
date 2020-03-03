import React, { useState, useEffect } from "react";
import { withFormik, Form, Field} from "formik";
import * as yup from "yup";
import styled from "styled-components";

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
    <div className="All">
          <Form>
        <Beef>
          <div>
            <Field className="beef1" type="text" name="username" placeholder="Pick a username" />
            {touched.Username && errors.Username && <p>{errors.Username}</p>}
          </div>
          
          <div>
            <Field className="beef2" type="password" name="Password" placeholder="Password" />
            {touched.Password && errors.Password && <p>{errors.Password}</p>}
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

const SignInForm = withFormik({ 
  mapPropsToValues({ Password, ConfirmPassword, Username}) {
    return {
      Username: Username || "",
      Password: Password || "",
   
    };
  },

  validationSchema: yup.object({
    Email: yup.string().required('Please enter your email'),
    Password: yup.string().required('Please enter your password'),
    Username: yup.string().required('Please enter a username')

    
  }),

})(SignIn);

export default SignInForm;
