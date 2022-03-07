import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
<<<<<<< HEAD
import CategoriesListBackoffice from './Components/Categories/CategoriesListBackoffice';
import NewsForm from './Components/News/NewsForm';
import NewsDetail from './Components/News/Detail/NewsDetail';
=======
import NewsForm from './Components/News/NewsForm';
>>>>>>> 28e145b32e2810142bcd2e904dcae70939936dd7
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
<<<<<<< HEAD
import NewsletterForm from "./Components/Newsletter/NewsletterForm";
import ScreenDashboard from "./Components/Dashboard/ScreenDashboard";
=======
import NewsletterForm from './Components/Newsletter/NewsletterForm';
import ScreenDashboard from './Components/Dashboard/ScreenDashboard';
>>>>>>> 28e145b32e2810142bcd2e904dcae70939936dd7
import Home from './Components/Home';
import HomeForm from './Components/HomeForm/HomeForm';
import Title from './Components/Title/Title';
import MembersEdit from './Components/Members/MembersEdit';
import Detail from './Components/Activities/Detail/Detail';
import ActivitiesList from './Components/Activities/ActivitiesList';
import Contact from './Components/Contact/Contact';
import OrganizationForm from './Components/Organization/OrganizationForm';
<<<<<<< HEAD
import MembersBackofficeList from './Components/Members/MembersBackofficeList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/backoffice/members/edit" component={MembersEdit} />
          <Route
            path="/backoffice/organization/edit"
            component={OrganizationForm}
          />
          <Route path="/backoffice/members" component ={MembersBackofficeList} />
          <Route path="/backoffice/organization" component={HomeForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/backoffice/categories" component={CategoriesListBackoffice} />
          <Route path="/backoffice" component={ScreenDashboard} />
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/novedades/:id" exact component={NewsDetail} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/Actividades/:id" component={Detail} />
          <Route path="/actividades">
            <Title text="Actividades" />
          </Route>
        </Switch>
      </BrowserRouter>
      <div className="mb-5">
        {!localStorage.getItem("Newsletter") && <NewsletterForm />}
      </div>
    </>
  );
=======
import NewsBackofficeList from './Components/News/NewsBackofficeList';
import ContactForm from './Components/Contact/ContactForm';
import News from './Components/News/News';
import SlideList from './Components/Slides/SlideList';
import UsersList from './Components/Users/UsersList';
import AboutUs from './Components/About/AboutUs';

function App() {
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
					<Route path="/backoffice/slides" component={SlideList}></Route>
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
					<Route path="/Actividades/:id" component={Detail} />
					<Route path="/actividades">
						<Title text="Actividades" />
					</Route>
					<Route path="/novedades" component={News} />
					<Route path="/nosotros" component={AboutUs}></Route>
				</Switch>
			</BrowserRouter>
			<div className="mb-5">
				{!localStorage.getItem('Newsletter') && <NewsletterForm />}
			</div>
			<ContactForm />
		</>
	);
>>>>>>> 28e145b32e2810142bcd2e904dcae70939936dd7
}

export default App;
