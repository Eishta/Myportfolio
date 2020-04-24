import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import About from './components/about'
import Navbar from './components/NavBar'
import Experience from "./components/experiene";
import Education from "./components/education";
import Skills from "./components/skills";

import Projects from "./components/projects";
import Project from "./components/Project"



const App =() =>{
 
    return (
    <React.Fragment> 
      <Router>
      <Navbar/>
              <Switch> 
                <Route path='/' exact component={About} />
                <Route path='/experience' component={Experience} />
                <Route path='/education' component={Education} />
                <Route path='/skills' component={Skills} />
                <Route path='/projects' exact component={Projects} />
                <Route path='/projects/:id' component={Project} />
                <Redirect to="/" />
              </Switch>

      </Router>
      
     </React.Fragment>)
  
}

export default App;
