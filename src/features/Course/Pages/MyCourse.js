import React from 'react';
import '../../Course/Course.scss';
import CourseCard from '../../../components/CourseCard.js/CourseCard';

const MyCourse = (props) => {
  return (
    <div className="course-list-container">
      <div className="course-list">
        {[""].map((item, i) =>(
          <CourseCard
            key={i}
            thumbnail={'https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg'}
            title="The Complete tutorial adasd dasdasd asddas dasd"
            description="Lorem ipsumsaasadasdasdasdsadasdasdkasjkdaskjda"
            onClick={(e) => console.log(e)}
          />))}
      </div>
    </div>
  );
}

export default MyCourse;
