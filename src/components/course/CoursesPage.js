import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions'; // for mapDispatchToProps
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this); // react doesn't auto bind in ES6, we handle binding here
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    // debugger;
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// the state represent the state thats within the redux store, from this state we can get the data for the courses
function mapStateToProps(state, ownProps) {
  // debugger;
  // console.log('state',state)
  return {
    // this means that : I want to be able to access my courses by saying "this.props.courses" on this component
    courses: state.courses // return the props that we would like see exposed on our component ( courses is from course reducers .js)
    // the propery courses is determined by the choice we made within our reducer. (check it in the root reducer)
  };
}

// decide what actions you want to expose in our component
function mapDispatchToProps(dispatch) {
  return {
   };
}


// connect func return a func that immediatley calls our container component(CoursesPage) with the result for first function
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // export a component that decorated by the react-redux connect function
// connect function is what we use to create components that can interact with redux - container component

// if we dont send the mapDispatchToProps, the we call from the componnet this.props.dispatch

/* this is the same as above
const connectedStateAndProps = connect(mapStateToProps,mapDispatchToProps);
export default  connectedStateAndProps(CoursesPage);
*/

