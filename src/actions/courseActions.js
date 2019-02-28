// hold our course-related action creators
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

// create an action, and handle it with reducers
export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course}; // pass the type, and as many data as we want - here we passsed an course object
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

//async call to API, we want to handle the promise and then dispatch an action when the promise is resolved
export function loadCourses() {
  return function(dispatch) { // always return a func that accepts dispatch
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses)); // dispatch action creator
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
