import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Dashboard from "./components/general/Dashboard"
import Navigation from "./components/general/Navigation"

import VolunteerLogin from "./components/volunteer/Login"
import VolunteerRegister from "./components/volunteer/Register"
import VolunteerProfile from "./components/volunteer/Profile"
import './App.css';

import './components/business/business.css'
import SignIn from './components/business/Login';
import SignUpForm from './components/business/Register';
import BusinessProfile from './components/business/Profile'

export default function App() {
  return (
        <div className="App">
            <Navigation />
            <Route exact path="/" component={Dashboard}/>

            <Route path="/volunteer/login" exact component={VolunteerLogin}/>
            <Route path="/volunteer/register" component={VolunteerRegister}/>
            <Route path="/volunteer/profile" component={VolunteerProfile}/>

                              {/* Business routes */}
            <Route path="/Business/SignIn" component={SignIn} />
            <Route path="/Business/Signup" component={SignUpForm} />
            <Route path="/Business/Profile" component={BusinessProfile} />

        </div>
  );
}