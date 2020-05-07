import React from 'react';
import '../../Course/Course.scss';
import { Button } from '@material-ui/core';
import CourseDetailPreview from './../components/CourseDetailPreview';
import CourseDetailCurriculum from './../components/CourseDetailCurriculum';
import { GET_COURSE_BY_ID } from '../actions';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo';
import authcheck from '../../../utils/authcheck';

const CourseWatch = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const { loading, error, data } = useQuery(GET_COURSE_BY_ID, {
    variables: { id },
  });
  return (
    <div className="course-detail-container">
    </div>
  );
}

export default withRouter(CourseWatch);
