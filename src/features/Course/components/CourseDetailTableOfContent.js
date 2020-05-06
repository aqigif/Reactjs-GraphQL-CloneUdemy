import React from 'react';
import '../../Course/Course.scss';
import { Button } from '@material-ui/core';

const CourseDetailTableOfContent = (props) => {
  const { totalLectures } = props;
  return (
    <div className="course-detail-container-card">
      <div className="course-section-wrapper">
        <span className="title-course-section">Course Content</span>
        <div className="info-course-section">
          <span className='link-blue'>Expand All</span>
          <span className='total-lectures'>{totalLectures} Lectures</span>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailTableOfContent;
