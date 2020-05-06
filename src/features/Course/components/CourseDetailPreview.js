import React from 'react';
import '../../Course/Course.scss';
import { Button } from '@material-ui/core';

const CourseDetailPreview = (props) => {
  return (
    <div className="course-detail-container-card">
      <div className="course-detail-wrapper">
        <span className="title-course-detail">The completeasdkasdas asdasdasd a</span>
        <span className="desc-course-detail">
          Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!
        </span>
        <div id='button-primary'>
          <Button variant="contained" color="primary">
            Enroll in Course
          </Button>
        </div>
      </div>
      <div className="course-preview-wrapper">
        <div className="preview-course-detail">
        <iframe 
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPreview;
