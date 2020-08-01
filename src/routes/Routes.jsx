//  libraries
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//  components
import Home from '../pages/home/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Home /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
