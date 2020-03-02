import React from 'react';
import { Route, Switch } from "react-router-dom"
import Navigation from "./components/general/Dashboard"
import Dashboard from "./components/general/Dashboard"

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={Dashboard} />
    </div>
  );
}

export default App;
