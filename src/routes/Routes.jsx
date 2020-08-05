//  libraries
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//  constants
import pagesList from 'constants/pagesList';

//  components
import Layout from 'components/layout/Layout';

function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {pagesList.map(({ path, Component }) => (
            <Route exact path={path} key={path}><Component /></Route>
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
