import React from 'react';
import {
  HashRouter as Router,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from '../pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/4xe" component={Home} />
      <Route exact path="/4xeversoes" component={Home} />
      {/* <Route exact path="/agende" component={Agende} /> */}
      {/* <Route exact path="/modal" component={Modal} /> */}
      <Redirect to="/4xe" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
