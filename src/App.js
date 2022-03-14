import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import ActivityDetail from './Components/Activities/Detail/Detail';
import ActivitiesList from './Components/Activities/ActivitiesList';
import Contact from './Components/Contact/Contact';
import OrganizationForm from './Components/Organization/OrganizationForm';
import NewsBackofficeList from './Components/News/NewsBackofficeList';
import News from './Components/News/News';
import NewsDetail from './Components/News/Detail/NewsDetail';
import SlideList from './Components/Slides/SlideList';
import UsersList from './Components/Users/UsersList';
import AboutUs from './Components/About/AboutUs';
import CategoriesListBackoffice from './Components/Categories/CategoriesListBackoffice';
import MembersBackofficeList from './Components/Members/MembersBackofficeList';
import PageNotFound from './Components/PageNotFound';
import { ABOUT, ACTIVITIES, /* ACTIVITIES_WEB, */ ACTIVITIES_WEB_DETAILS, ACTIVITY_CREATE, ACTIVITY_EDIT, BACKOFFICE, CATEGORIES, CATEGORY_CREATE, CATEGORY_EDIT, CONTACT, HOME, /* CONTRIBUTE, */ MEMBERS, MEMBER_CREATE, MEMBER_EDIT, NEWS, NEWS_CREATE, NEWS_EDIT, NEWS_WEB, NEWS_WEB_DETAILS, ORGANIZATION, ORGANIZATION_CREATE, ORGANIZATION_EDIT, /* PROJECTS, */ PROJECT_CREATE, PROJECT_EDIT, SCHOOL_CAMPAIGN, SLIDES, SLIDE_CREATE, SLIDE_EDIT, /* TESTIMONIALS_WEB, */ /* TESTIMONIALS, */ TESTIMONY_CREATE, TESTIMONY_EDIT, TOYS_CAMPAIGN, /* THANKS, */ USERS, USER_CREATE, USER_EDIT } from './config/router/routes';


const Backoffice = () => {
  return (
    <Switch>
      <Route exact path={BACKOFFICE} component={ScreenDashboard} />
      <Route exact path={PROJECT_EDIT} component={ProjectsForm} />
      <Route exact path={PROJECT_CREATE} component={ProjectsForm} />
      {/* <Route path={PROJECTS} component={ProjectsList} /> //No existe el componente todavía */}

      <Route exact path={TESTIMONY_EDIT} component={TestimonialForm} />
      <Route exact path={TESTIMONY_CREATE} component={TestimonialForm} />
      {/* <Route exact path={TESTIMONIALS} component={TestimonialsList} /> //No existe el componente todavía*/}

      <Route exact path={ACTIVITY_EDIT} component={ActivitiesForm} />
      <Route exact path={ACTIVITY_CREATE} component={ActivitiesForm} />
      <Route exact path={ACTIVITIES} component={ActivitiesList} />

      <Route exact path={NEWS_EDIT} component={NewsForm} />
      <Route exact path={NEWS_CREATE} component={NewsForm} />
      <Route exact path={NEWS} component={NewsBackofficeList} />

      <Route exact path={SLIDE_EDIT} component={SlidesForm} />
      <Route exact path={SLIDE_CREATE} component={SlidesForm} />
      <Route exact path={SLIDES} component={SlideList} />

      <Route exact path={CATEGORY_EDIT} component={CategoriesForm} />
      <Route exact path={CATEGORY_CREATE} component={CategoriesForm} />
      <Route exact path={CATEGORIES} component={CategoriesListBackoffice} />

      <Route exact path={USER_EDIT} component={UserForm} />
      <Route exact path={USER_CREATE} component={UserForm} />
      <Route exact path={USERS} component={UsersList} />

      <Route exact path={MEMBER_EDIT} component={MembersEdit} />
      <Route exact path={MEMBER_CREATE} component={MembersEdit} />
      <Route exact path={MEMBERS} component={MembersBackofficeList} />

      <Route exact path={ORGANIZATION_EDIT} component={OrganizationForm} />
      <Route exact path={ORGANIZATION_CREATE} component={OrganizationForm} />
      <Route exact path={ORGANIZATION} component={HomeForm} />
    </Switch>
  )
};

const PublicWeb = () => {
  return (
    <Switch>
      <Route exact path={SCHOOL_CAMPAIGN} component={SchoolCampaign} />
      <Route exact path={TOYS_CAMPAIGN} component={ToysCampaign} />
      {/* <Route exact path={TESTIMONIALS_WEB} component={<Testimonials />} /> //No existe el componente todavía */}
      <Route exact path={ACTIVITIES_WEB_DETAILS} component={ActivityDetail} />
      {/* <Route exact path={ACTIVITIES_WEB} component={Activities} /> //No existe el componente todavía */}
      <Route exact path={NEWS_WEB_DETAILS} component={NewsDetail} />
      <Route exact path={NEWS_WEB} component={News} />
      {/* <Route exact path={THANKS} component={<Thanks />} /> //No existe el componente todavía */}
      {/* <Route exact path={CONTRIBUTE} component={<Contribute />} /> //No existe el componente todavía */}
      <Route exact path={CONTACT} component={Contact} />
      <Route exact path={ABOUT} component={AboutUs} />
      <Route exact path={HOME} component={Home} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  )
};

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={BACKOFFICE} component={Backoffice} />

          <Route path={HOME} component={PublicWeb} />
        </Switch>
      </Router>
      {/*  <div className="mb-5">
        {!localStorage.getItem('Newsletter') && <NewsletterForm />}
      </div> */}
    </>
  );
}

export default App;
