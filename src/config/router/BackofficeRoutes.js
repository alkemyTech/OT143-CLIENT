import { Switch } from 'react-router-dom';
import {
  ACTIVITIES,
  ACTIVITY_CREATE,
  ACTIVITY_EDIT,
  BACKOFFICE,
  CATEGORIES,
  CATEGORY_CREATE,
  CATEGORY_EDIT,
  MEMBERS,
  MEMBER_CREATE,
  MEMBER_EDIT,
  NEWS,
  NEWS_CREATE,
  NEWS_EDIT,
  ORGANIZATION,
  ORGANIZATION_CREATE,
  ORGANIZATION_EDIT,
	/* PROJECTS, */ PROJECT_CREATE,
  PROJECT_EDIT,
  SLIDES,
  SLIDE_CREATE,
  SLIDE_EDIT,
  TESTIMONIALS,
  TESTIMONY_CREATE,
  TESTIMONY_EDIT,
  USERS,
  USER_CREATE,
  USER_EDIT,
} from './routes';
import ScreenDashboard from '../../Components/Dashboard/ScreenDashboard';
import ProjectsForm from '../../Components/Projects/ProjectsForm';
import Testimonials from "../../Components/Testimonials/TestimonialsListBackoffice";
import TestimonialForm from '../../Components/Testimonials/TestimonialsForm';
import Activities from '../../Components/Activities/ActivitiesList';
import ActivitiesForm from '../../Components/Activities/ActivitiesForm';
import News from '../../Components/News/NewsBackofficeList';
import NewsForm from '../../Components/News/NewsForm';
import Slides from '../../Components/Slides/SlideList';
import SlidesForm from '../../Components/Slides/SlidesForm';
import Categories from '../../Components/Categories/CategoriesListBackoffice';
import CategoriesForm from '../../Components/Categories/CategoriesForm';
import Users from '../../Components/Users/UsersList';
import UserForm from '../../Components/Users/UsersForm';
import HomeForm from '../../Components/HomeForm/HomeForm';
import Members from '../../Components/Members/MembersBackofficeList';
import MembersForm from '../../Components/Members/MembersEdit';
import OrganizationForm from '../../Components/Organization/OrganizationForm';
import Layout from "../../Components/Backoffice/Layout";
import PrivateRoute from './PrivateRoute';

const BackofficeRoutes = () => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute exact path={BACKOFFICE} component={ScreenDashboard} />

        <PrivateRoute exact path={PROJECT_EDIT} component={ProjectsForm} />
        <PrivateRoute exact path={PROJECT_CREATE} component={ProjectsForm} />
        {/* <PrivateRoute path={PROJECTS} component={Projects} /> //No existe el componente todavía */}

        <PrivateRoute exact path={TESTIMONY_EDIT} component={TestimonialForm} />
        <PrivateRoute exact path={TESTIMONY_CREATE} component={TestimonialForm} />
        <PrivateRoute exact path={TESTIMONIALS} component={Testimonials} />

        <PrivateRoute exact path={ACTIVITY_EDIT} component={ActivitiesForm} />
        <PrivateRoute exact path={ACTIVITY_CREATE} component={ActivitiesForm} />
        <PrivateRoute exact path={ACTIVITIES} component={Activities} />

        <PrivateRoute exact path={NEWS_EDIT} component={NewsForm} />
        <PrivateRoute exact path={NEWS_CREATE} component={NewsForm} />
        <PrivateRoute exact path={NEWS} component={News} />

        <PrivateRoute exact path={SLIDE_EDIT} component={SlidesForm} />
        <PrivateRoute exact path={SLIDE_CREATE} component={SlidesForm} />
        <PrivateRoute exact path={SLIDES} component={Slides} />

        <PrivateRoute exact path={CATEGORY_EDIT} component={CategoriesForm} />
        <PrivateRoute exact path={CATEGORY_CREATE} component={CategoriesForm} />
        <PrivateRoute exact path={CATEGORIES} component={Categories} />

        <PrivateRoute exact path={USER_EDIT} component={UserForm} />
        <PrivateRoute path={USER_CREATE} component={UserForm} />
        {/* <PrivateRoute exact path={USER_CREATE} component={UserForm} /> */}
        <PrivateRoute exact path={USERS} component={Users} />

        <PrivateRoute exact path={MEMBER_EDIT} component={MembersForm} />
        <PrivateRoute exact path={MEMBER_CREATE} component={MembersForm} />
        <PrivateRoute exact path={MEMBERS} component={Members} />

        <PrivateRoute
          exact
          path={ORGANIZATION_EDIT}
          component={OrganizationForm}
        />
        <PrivateRoute
          exact
          path={ORGANIZATION_CREATE}
          component={OrganizationForm}
        />
        <PrivateRoute exact path={ORGANIZATION} component={HomeForm} />
      </Switch>
    </Layout>
  );
};

export default BackofficeRoutes;
