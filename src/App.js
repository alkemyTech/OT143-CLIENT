import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BACKOFFICE, HOME } from './config/router/routes';
import BackofficeRoutes from './config/router/BackofficeRoutes';
import PublicWebRoutes from './config/router/PublicWebRoutes';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={BACKOFFICE} component={BackofficeRoutes} />
          <Route path={HOME} component={PublicWebRoutes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
