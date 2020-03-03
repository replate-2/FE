import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navigation from "./components/general/Navigation"
import Dashboard from "./components/general/Dashboard"
import VolunteerLogin from "./components/volunteer/Login"
import VolunteerRegister from "./components/volunteer/Register"
import VolunteerProfile from "./components/volunteer/Profile"
import './App.css';
import SignIn from './components/business/Login';

export default function App() {
  return (
        <div className="App">
            <Route exact path="/" component={Dashboard}/>
            <Route path="/volunteer/login" exact component={VolunteerLogin}/>
            <Route path="/volunteer/register" component={VolunteerRegister}/>
            <Route path="/volunteer/profile" component={VolunteerProfile}/>
        </div>
  );
}