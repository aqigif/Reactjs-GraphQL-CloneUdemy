import React from 'react';
import '../../Course/Course.scss';
import { Button } from '@material-ui/core';
import CourseDetailPreview from './../components/CourseDetailPreview';
import CourseDetailCurriculum from './../components/CourseDetailCurriculum';
import { GET_COURSE_BY_ID } from '../actions';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo';
import authcheck from '../../../utils/authcheck';

const MyCourse = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const { loading, error, data } = useQuery(GET_COURSE_BY_ID, {
    variables: { id },
  });
  const dataCourse = data?.course;
  const enroll = () => {
    if(authcheck()) {

    } else {
      props.history.push('/login')
    }
  }
  return (
    <div className="course-detail-container">
      <CourseDetailPreview
        thumbnail={dataCourse?.cover}
        title={dataCourse?.title}
        description={dataCourse?.description}
        onClick={enroll}
      />
      <CourseDetailCurriculum 
        id={id}
      />
    </div>
  );
}

export default withRouter(MyCourse);
