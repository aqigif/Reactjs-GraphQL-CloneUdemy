import React from 'react';
import '../../Course/Course.scss';
import { Button } from '@material-ui/core';
import CourseDetailPreview from './../components/CourseDetailPreview';
import CourseDetailTableOfContent from './../components/CourseDetailTableOfContent';

const MyCourse = (props) => {
  return (
    <div className="course-detail-container">
      <CourseDetailPreview />
      <CourseDetailTableOfContent />
    </div>
  );
}

export default MyCourse;
