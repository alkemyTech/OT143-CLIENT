import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import NewsletterForm from "./Components/Newsletter/NewsletterForm";
import ScreenDashboard from "./Components/Dashboard/ScreenDashboard";
import Home from './Components/Home';
import HomeForm from './Components/HomeForm/HomeForm';
import Title from './Components/Title/Title';
import MembersEdit from './Components/Members/MembersEdit';
import Detail from './Components/Activities/Detail/Detail';
import OrganizationForm from './Components/Organization/OrganizationForm';
import Carousel from './Components/Carousel/Carousel';

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
          <Route path="/backoffice/organization" component={HomeForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/backoffice" component={ScreenDashboard} />
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/Organization" component={HomeForm} />
          <Route path="/backoffice" component={ScreenDashboard} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/backoffice/members/edit" component={MembersEdit} />
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
      <Carousel />
      <div className="mb-5">
        {!localStorage.getItem("Newsletter") && <NewsletterForm />}
      </div>
    </>
  );
}

export default App;
