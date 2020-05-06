import React from 'react';
import '../../Course/Course.scss';
import { Button } from '@material-ui/core';
import CourseDetailPreview from './../components/CourseDetailPreview';
import CourseDetailTableOfContent from './../components/CourseDetailTableOfContent';
import { GET_COURSE_BY_ID } from '../actions';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo';

const MyCourse = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const { loading, error, data } = useQuery(GET_COURSE_BY_ID, {
    variables: { id },
  });
  const dataCourse = data?.course;
  return (
    <div className="course-detail-container">
      <CourseDetailPreview
        thumbnail={dataCourse?.cover}
        title={dataCourse?.title}
        description={dataCourse?.description}
      />
      <CourseDetailTableOfContent 
        totalLectures={0}
      />
    </div>
  );
}

export default withRouter(MyCourse);
