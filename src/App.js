import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BACKOFFICE, HOME, SCHOOL_CAMPAIGN, TOYS_CAMPAIGN } from './config/router/routes';
import BackofficeRoutes from './config/router/BackofficeRoutes';
import PublicWebRoutes from './config/router/PublicWebRoutes';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path={BACKOFFICE} component={BackofficeRoutes} />
          <Route exact path={SCHOOL_CAMPAIGN} component={SchoolCampaign} />
          <Route exact path={TOYS_CAMPAIGN} component={ToysCampaign} />
          <Route path={HOME} component={PublicWebRoutes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
