import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activitiesReducer from '../features/Activities/activitiesSlice';
import projectReducer from '../features/projects/projectSlice';
import membersReducer from '../features/members/membersSlice';
import authReducer from '../features/auth/authSlice';
import slidesReducer from '../features/Slides/slidesSlice';
import usersReducer from '../features/users/usersSlice';
import newsReducer from '../features/news/newsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    project: projectReducer,
    activities: activitiesReducer,
    members: membersReducer,
    slides: slidesReducer,
    users: usersReducer,
    auth: authReducer,
    news: newsReducer,
  },
});
