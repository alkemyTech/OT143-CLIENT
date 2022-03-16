import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BACKOFFICE, HOME } from './config/router/routes';
import NewsletterForm from './Components/Newsletter/NewsletterForm';
import BackofficeRoutes from './config/router/BackofficeRoutes';
import PublicWebRoutes from './config/router/PublicWebRoutes';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={BACKOFFICE} component={BackofficeRoutes} />
            <Route path={HOME} component={PublicWebRoutes} />
          </Switch>
        </Router>
        <div className="mb-5">
          {!localStorage.getItem('Newsletter') && <NewsletterForm />}
        </div>
      </Provider>
    </>
  );
}

export default App;
