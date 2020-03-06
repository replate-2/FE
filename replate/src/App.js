import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"

import Dashboard from "./components/general/Dashboard"
import Navigation from "./components/general/Navigation"

import VolunteerLogin from "./components/volunteer/Login"
import VolunteerRegister from "./components/volunteer/Register"
import VolunteerProfile from "./components/volunteer/Profile"
import EditVolunteer from "./components/volunteer/EditProfile"
import './App.css';

import './components/business/business.css'
import SignIn from './components/business/Login';
import SignUpForm from './components/business/Register';
import BusinessProfile from './components/business/Profile'
import EditBusiness from "./components/business/EditProfile"

export default function App() {
  return (
        <div className="App">
            <Navigation />
            <Switch>
            <Route exact path="/" component={Dashboard}/>

            <Route path="/volunteer/login" exact component={VolunteerLogin}/>
            <Route path="/volunteer/register" component={VolunteerRegister}/>
            <PrivateRoute path="/volunteer/profile" component={VolunteerProfile}/>
            <PrivateRoute path="/volunteer/edit" component={EditVolunteer}/>

                              {/* Business routes */}
            <Route path="/Business/SignIn" component={SignIn} />
            <Route path="/Business/Signup" component={SignUpForm} />
            <PrivateRoute path="/Business/Profile" component={BusinessProfile} />
            <PrivateRoute path="/Business/Edit" component={EditBusiness} />
            </Switch>

        </div>
  );
}