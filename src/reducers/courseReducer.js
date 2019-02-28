import * as types from '../actions/actionTypes';
import initialState from './initialState';

// reducers (function that accept a state and an action, the returns new state)
export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      // debugger;
      return [
        ...state, // spread the array, take all the values in it and defined them here inline. this ends up returing a new instance of our state array
        Object.assign({}, action.course) // create deep copy of the of the course thats passed in
      ]; // return an array, use the spread operator on the existing state, and then use object.assign, and pass it out target object, whith is an empty object in this case and then the course thats passed on our action

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
