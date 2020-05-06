import React from 'react';
import '../../Course/Course.scss';
import { Button } from '@material-ui/core';

const CourseDetailTableOfContent = (props) => {
  return (
    <div className="course-detail-container-card">
      <div className="course-section-wrapper">
        <span className="title-course-section">Course Content</span>
        <div className="info-course-section">
          <span className='link-blue'>Expand All</span>
          <span className='total-lectures'>480 Lectures</span>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailTableOfContent;
