// == Import npm
import React from 'react';
import {
  // Switch,
  Route,
} from 'react-router-dom';

// == Import
import PlaySound from '../PlaySound';
import HomePage from '../HomePage';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import Contact from '../Contact';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <PlaySound />
    {/* <Switch> */}
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route exact path="/aboutme">
      <AboutMe />
    </Route>
    <Route exact path="/projects">
      <Projects />
    </Route>
    <Route exact path="/contact">
      <Contact />
    </Route>
    {/* </Switch> */}
  </div>
);

// == Export
export default App;
