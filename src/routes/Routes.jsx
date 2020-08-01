//  libraries
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//  components
import Toolbar from 'components/toolbar/Toolbar';
import Home from '../pages/home/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Toolbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
