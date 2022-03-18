import { Route, Switch } from 'react-router-dom';
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
	/* TESTIMONIALS,*/ TESTIMONY_CREATE,
	TESTIMONY_EDIT,
	USERS,
	USER_CREATE,
	USER_EDIT,
} from './routes';
import ScreenDashboard from '../../Components/Dashboard/ScreenDashboard';
import ProjectsForm from '../../Components/Projects/ProjectsForm';
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
import PrivateRoute from './PrivateRoute';

const BackofficeRoutes = () => {
	return (
		<Switch>
			<PrivateRoute exact path={BACKOFFICE} component={ScreenDashboard} />

			<Route exact path={PROJECT_EDIT} component={ProjectsForm} />
			<Route exact path={PROJECT_CREATE} component={ProjectsForm} />
			{/* <Route path={PROJECTS} component={Projects} /> //No existe el componente todavía */}

			<Route exact path={TESTIMONY_EDIT} component={TestimonialForm} />
			<Route exact path={TESTIMONY_CREATE} component={TestimonialForm} />
			{/* <Route exact path={TESTIMONIALS} component={Testimonials} /> //No existe el componente todavía*/}

			<Route exact path={ACTIVITY_EDIT} component={ActivitiesForm} />
			<Route exact path={ACTIVITY_CREATE} component={ActivitiesForm} />
			<Route exact path={ACTIVITIES} component={Activities} />

			<Route exact path={NEWS_EDIT} component={NewsForm} />
			<Route exact path={NEWS_CREATE} component={NewsForm} />
			<Route exact path={NEWS} component={News} />

			<Route exact path={SLIDE_EDIT} component={SlidesForm} />
			<Route exact path={SLIDE_CREATE} component={SlidesForm} />
			<Route exact path={SLIDES} component={Slides} />

			<Route exact path={CATEGORY_EDIT} component={CategoriesForm} />
			<Route exact path={CATEGORY_CREATE} component={CategoriesForm} />
			<Route exact path={CATEGORIES} component={Categories} />

			<Route exact path={USER_EDIT} component={UserForm} />
			<Route path={USER_CREATE} component={UserForm} />
			{/* <Route exact path={USER_CREATE} component={UserForm} /> */}

			<Route exact path={USERS} component={Users} />

			<Route exact path={MEMBER_EDIT} component={MembersForm} />
			<Route exact path={MEMBER_CREATE} component={MembersForm} />
			<Route exact path={MEMBERS} component={Members} />

			<Route exact path={ORGANIZATION_EDIT} component={OrganizationForm} />
			<Route exact path={ORGANIZATION_CREATE} component={OrganizationForm} />
			<Route exact path={ORGANIZATION} component={HomeForm} />
		</Switch>
	);
};

export default BackofficeRoutes;
