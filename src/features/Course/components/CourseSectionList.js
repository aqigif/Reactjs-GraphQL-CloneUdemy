import React from 'react';
import '../../Course/Course.scss';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RemoveIcon from '@material-ui/icons/Remove';

const CourseSectionList = (props) => {
  const [dataSection, setDataSection] = React.useState([]);
  
  React.useMemo(()=>{
    const { data } = props;
    setDataSection(data);
  }, [props]);

  const onExpand = (id, status) => {
    const newData = [...dataSection];
    const index = newData.findIndex((item) => id === item.id);
    let item = newData[index];
    item = {
      ...item,
      isExpand: !status
    };
    newData.splice(index, 1, {
      ...item
    });
    setDataSection(newData);
  }

  return (
    <div>
      {dataSection && dataSection.map((item) => {
        const lectureLength = item.lectures.length;
        return(
          <div className="course-section-list" onClick={()=>onExpand(item.id, item?.isExpand)}>
            <div className="course-section-title-wrapper">
              <div className={`course-section-title ${item?.isExpand ? 'nobottom-radius' : ''}`}>
                <div className='course-section-title-text-wrapper'>
                  {item?.isExpand ? <RemoveIcon style={{color: '#050505'}} /> : <AddIcon style={{color: '#050505'}} /> }
                  <span className='course-section-title-text'>{item?.title}</span>
                </div>
                <span className='course-section-grey-text lectures-total'>{item?.lectures.length} Lectures</span>
                <span className='course-section-grey-text time-total'>-</span>
              </div>
              {item?.isExpand && (item?.lectures.length !== 0 ? item?.lectures.map((lectureItem, lectureIndex) => (
              <div className={`course-lecture-title ${lectureLength === (lectureIndex+1) ? 'bottom-radius' :'nobottom-radius'}`}>
                <div className='course-section-title-text-wrapper margin-left-full'>
                  <PlayCircleFilledIcon style={{color: '#8A8C90'}} />
                  <span className='course-section-grey-text margin-left'>{lectureItem?.title}</span>
                </div>
                <span className='course-section-grey-text'>-</span>
              </div>)) : 
              <div className={'course-lecture-title bottom-radius align-center'}>
                <span className='course-section-grey-text '>No Lecture Data</span>
              </div>)}
            </div>
          </div>)})}
    </div>
  );
}

export default CourseSectionList;
