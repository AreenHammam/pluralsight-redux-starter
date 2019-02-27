import React from 'react';
import { Route, IndexRoute } from 'react-router'; // index router is what we use when there is just a root path that we want tp expose.
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import TestPage from './components/test/TestPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}> // always load our app component
    // then nest these other items, pass them as children based our router.
    // index route will reference our HomePage
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="test" component={TestPage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
