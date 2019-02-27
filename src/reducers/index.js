// root reducers

import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// define all reducers that we want to combine for our app
const rootReducer = combineReducers({
  courses, // ES6 shorthand property name
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
