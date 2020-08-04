//  libraries
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//  components
import Layout from 'components/layout/Layout';
import Home from 'pages/home/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'><Home /></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
