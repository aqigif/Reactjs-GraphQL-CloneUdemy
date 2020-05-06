import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import '../../Course/Course.scss';
import CourseCard from '../../../components/CourseCard.js/CourseCard';
import { GET_COURSES } from '../actions';
import { withRouter } from 'react-router-dom';

const HomeDiscover = (props) => {
  const { loading, error, data } = useQuery(GET_COURSES);
  const dataCourses = data?.courses;
  const goToCourseDetail = (id) => {
    const { history } = props;
    history.push(`/course/${id}`);
  }
  return (
    <div className="course-list-container">
      <div className="course-list">
        {dataCourses && dataCourses.map((item, i) =>(
          <CourseCard
            key={i}
            thumbnail={item.cover}
            title={item.title}
            description={item.description}
            onClick={(e) => goToCourseDetail(item.id)}
          />))}
      </div>
    </div>
  );
}

export default withRouter(HomeDiscover);
