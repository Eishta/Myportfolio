import React from 'react'
import NavBar from './Menu/NavBar'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import Projects from './Projects/Projects'
import Project from './Projects/Project/Project'

const App=() => {

    const pages = [
      {
        pageLink: '/',
        view: Projects,
        displayName: 'Home'
      },
      {
        pageLink: '/projects',
        view: Projects,
        displayName: 'Demographics'
      }];
  return (
    <div>
      <Router>
      <Route
          render={({location}) => (
            <div>
              <NavBar />
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
    </div>
  );
}

export default App;
