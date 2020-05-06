import React from 'react';
import '../../Course/Course.scss';
import { Button } from '@material-ui/core';

const CourseDetailPreview = (props) => {
  const { title, description, thumbnail } = props;
  return (
    <div className="course-detail-container-card">
      <div className="course-detail-wrapper">
        <span className="title-course-detail">{title}</span>
        <span className="desc-course-detail">
          {description}
        </span>
        <div id='button-primary'>
          <Button variant="contained" color="primary">
            Enroll in Course
          </Button>
        </div>
      </div>
      <div className="course-preview-wrapper">
        <div className="preview-course-detail">
        <img 
          src={thumbnail}
        />
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPreview;
