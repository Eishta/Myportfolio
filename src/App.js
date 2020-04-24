import React, { Component } from 'react';
import './App.css';
// import Sidebar from './portfolio/sidebar'
// import Introduction from './portfolio/introduction'
// import About from './portfolio/about'
// import Timeline from './portfolio/timeline'

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import AboutMe from './components/AboutMe'
import Projects from './components/Projects/Projects'
import Project from './components/Projects/Project/Project'

const App =() =>{
  const pages = [
    {
      pageLink: '/',
      view: AboutMe,
      displayName: 'Home'
    },
    {
      pageLink: '/projects',
      view: Projects,
      displayName: 'Demographics'
    }];
 
    return (
    <React.Fragment> 
      
      
      <Router>
      <Route
          render={({location}) => (
            <div>
              <Switch location={location}>
                {pages.map((page, index) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={index}
                    />
                  );
                })}
                <Route path='/projects/:id' component={Project} />
                <Redirect to="/" />
              </Switch>
            </div>
          )}
        />

      </Router>
      
     </React.Fragment>)
  
}

export default App;
