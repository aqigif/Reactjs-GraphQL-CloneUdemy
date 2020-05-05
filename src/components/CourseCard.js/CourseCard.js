import React from 'react';
import './Course.scss';

const CourseCard = (props) => {
  const { thumbnail, title, description, onClick} = props;
  return (
    <div className="course-card-container" onClick={onClick}>
      <div className="thumbnail-wrapper">
        <img src={thumbnail} alt='thumbnail' />
      </div>
      <div className='course-card-info'>
        <span className="thumbnail-title">{title}</span>
        <p className="thumbnail-subtitle">{description}</p>
      </div>
    </div>
  );
}

export default CourseCard;
