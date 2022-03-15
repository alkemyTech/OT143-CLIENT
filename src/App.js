import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BACKOFFICE, HOME } from './config/router/routes';
import NewsletterForm from './Components/Newsletter/NewsletterForm';
import BackofficeRoutes from './config/router/BackofficeRoutes';
import PublicWebRoutes from './config/router/PublicWebRoutes';

function App() {
<<<<<<< HEAD
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/backoffice/users" component={UsersList} />
					<Route path="/backoffice/members/edit" component={MembersEdit} />
					<Route
						path="/backoffice/organization/edit"
						component={OrganizationForm}
					/>
					<Route path="/backoffice/organization" component={HomeForm} />
					<Route path="/backoffice/create-slide" component={SlidesForm} />
					<Route path="/backoffice/news" component={NewsBackofficeList} />
					<Route path="/backoffice/slides" component={SlideList} />
					<Route
						path="/backoffice/categories"
						component={CategoriesListBackoffice}
					/>
					<Route path="/backoffice/members" component={MembersBackofficeList} />
					<Route path="/backoffice" component={ScreenDashboard} />
					<Route path="/backoffice/members/edit" component={MembersEdit} />
					<Route path="/contacto" component={Contact} />
					<Route path="/create-activity" component={ActivitiesForm} />
					<Route path="/create-category" component={CategoriesForm} />
					<Route path="/create-news" component={NewsForm} />
					<Route path="/create-testimonials" component={TestimonialForm} />
					<Route path="/create-user" component={UserForm} />
					<Route path="/create-member" component={MembersForm} />
					<Route path="/create-project" component={ProjectsForm} />
					<Route path="/school-campaign" component={SchoolCampaign} />
					<Route path="/toys-campaign" component={ToysCampaign} />
					<Route path="/actividades/:id" component={Detail} />
					<Route path="/actividades" component={ActivitiesList} />
					<Route path="/novedades/:id" component={NewsDetail} />
					<Route path="/novedades" component={News} />
					<Route path="/nosotros" component={AboutUs} />

					<Route path="*" component={PageNotFound} />
				</Switch>
			</BrowserRouter>
			<div className="mb-5">
				{!localStorage.getItem('Newsletter') && <NewsletterForm />}
			</div>
		</>
	);
=======
  return (
    <>
      <Router>
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
>>>>>>> e41dc787464c16ae6aacd689372302fd0c4f0c89
}

export default App;
