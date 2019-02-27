import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
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

// the state represent the state thats within the redux store
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses // reryrn the props that we would like see exposed on our component ( courses is from course reducers .js)
  };
}

// decide what actions you want to expose in our component
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// connect fun return a fun that immediatley calls our container compenent with the result fof first function
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // export a component that decorated by the react-redux connect function
// connect function is what we use to create components that can inteact with redux - container compenent

