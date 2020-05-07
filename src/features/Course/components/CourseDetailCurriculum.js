import React from 'react';
import '../../Course/Course.scss';
import CourseSectionList from './CourseSectionList';
import { useQuery } from 'react-apollo';
import { GET_SECTION_BY_COURSE_ID } from '../actions';

const CourseDetailCurriculum = (props) => {
  const [dataSection, setDataSection] = React.useState([]);
  const [isExpand, setExpand] = React.useState(false);
  const { id } = props;
  const { loading, error, data } = useQuery(GET_SECTION_BY_COURSE_ID, {
    variables: { id },
  });

  React.useMemo(()=>{
    const result = data?.sectionsConnection?.data;
    if (result) {
      setDataSection(result);
    }
  }, [data]);

  const onExpandAll = () => {
    const data = dataSection.map((item,index)=>{
      return {
        ...item,
        isExpand: !item.isExpand
      }
    });
    setDataSection(data);
    setExpand(!isExpand);
  }
  return (
    <div className="course-detail-container-section">
      <div className="course-section-wrapper">
        <span className="title-course-section">Course Content</span>
        <div className="info-course-section">
          <span className='link-blue' onClick={onExpandAll}>{isExpand ? 'Collapse All' : 'Expand All'}</span>
          <span className='total-lectures'>- Lectures</span>
        </div>
      </div>
      <CourseSectionList data={dataSection} setExpand={setExpand} />
    </div>
  );
}

export default CourseDetailCurriculum;
