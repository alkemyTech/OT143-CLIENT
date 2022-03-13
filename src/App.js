import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import NewsletterForm from './Components/Newsletter/NewsletterForm';
import ScreenDashboard from './Components/Dashboard/ScreenDashboard';
import Home from './Components/Home';
import HomeForm from './Components/HomeForm/HomeForm';
import Title from './Components/Title/Title';
import MembersEdit from './Components/Members/MembersEdit';
import Detail from './Components/Activities/Detail/Detail';
import ActivitiesList from './Components/Activities/ActivitiesList';
import Contact from './Components/Contact/Contact';
import OrganizationForm from './Components/Organization/OrganizationForm';
import NewsBackofficeList from './Components/News/NewsBackofficeList';
import News from './Components/News/News';
import NewsDetail from './Components/News/Detail/NewsDetail';
import SlideList from './Components/Slides/SlideList';
import UsersList from './Components/Users/UsersList';
import AboutUs from './Components/About/AboutUs';
<<<<<<< HEAD
import CategoriesListBackoffice from './Components/Categories/CategoriesListBackoffice';
import MembersBackofficeList from './Components/Members/MembersBackofficeList';
import Donacion from './Components/Donations/Donacion';
import Gracias from './Components/Donations/Gracias';
import PageNotFound from './Components/PageNotFound';
=======
import Donacion from './Components/Donations/Donacion';
import Gracias from './Components/Donations/Gracias';
import CategoriesListBackoffice from './Components/Categories/CategoriesListBackoffice';
import MembersBackofficeList from './Components/Members/MembersBackofficeList';
>>>>>>> cc26c455694107f986703447a6ad68fc7992e52f

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />

					<Route
						path="/backoffice/organization/edit"
						component={OrganizationForm}
					/>
					<Route path="/backoffice/organization" component={HomeForm} />
					<Route path="/backoffice/create-slide" component={SlidesForm} />
					<Route path="/backoffice/users" component={UsersList} />
					<Route path="/backoffice/news" component={NewsBackofficeList} />
					<Route path="/backoffice/slides" component={SlideList} />
					<Route
						path="/backoffice/categories"
						component={CategoriesListBackoffice}
					/>
					<Route path="/backoffice/members" component={MembersBackofficeList} />
					<Route path="/backoffice" component={ScreenDashboard} />
					<Route path="/backoffice/members/edit" component={MembersEdit} />
					<Route path="/backoffice/members" component={MembersBackofficeList} />
					<Route path="/backoffice" component={ScreenDashboard} />
					<Route path="/contacto" component={Contact} />
					<Route path="/create-activity" component={ActivitiesForm} />
					<Route path="/create-category" component={CategoriesForm} />
					<Route path="/create-member" component={MembersForm} />
					<Route path="/create-project" component={ProjectsForm} />
					<Route path="/create-news" component={NewsForm} />
					<Route path="/create-testimonials" component={TestimonialForm} />
					<Route path="/create-user" component={UserForm} />
					<Route path="/school-campaign" component={SchoolCampaign} />
					<Route path="/toys-campaign" component={ToysCampaign} />
					<Route path="/actividades/:id" component={Detail} />
					<Route path="/actividades" component={ActivitiesList} />
					<Route path="/novedades/:id" component={NewsDetail} />
					<Route path="/novedades" component={News} />
					<Route path="/donacion" component={Donacion} />
					<Route path="/gracias" component={Gracias} />
					<Route path="/nosotros" component={AboutUs} />
					<Route path="*" component={PageNotFound} />
				</Switch>
			</BrowserRouter>
			<div className="mb-5">
				{!localStorage.getItem('Newsletter') && <NewsletterForm />}
			</div>
		</>
	);
}

export default App;
