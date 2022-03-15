import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BACKOFFICE, HOME } from './config/router/routes';
import NewsletterForm from './Components/Newsletter/NewsletterForm';
import BackofficeRoutes from './config/router/BackofficeRoutes';
import PublicWebRoutes from './config/router/PublicWebRoutes';
import HeaderPublic from './Components/Common/HeaderPublic';

function App() {
  return (
    <>
      <Router>
        <HeaderPublic />
        <Switch>
          <Route path={BACKOFFICE} component={BackofficeRoutes} />
          <Route path={HOME} component={PublicWebRoutes} />
        </Switch>
      </Router>
      <div className="mb-5">
        {!localStorage.getItem('Newsletter') && <NewsletterForm />}
      </div>
    </>
  );
}

export default App;
