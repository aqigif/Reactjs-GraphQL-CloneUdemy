import React from 'react';
import './dropzone.scss';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const Dropzone = (props) => {
  const { value, onChange} = props;
  const ref = React.useRef(null)
  const onFileRef = () => {
    ref.current.click()
  };
  return (
    <div className='dropzone' onClick={onFileRef}>
      {value ? 
      <img src={value} style={{
        height: 100,
        width: 'auto',
      }}/>:<div className='dropzone-container' style={{
        height: 100,
        width: 180
      }}>
        <CloudUploadIcon style={{color: '#8854D0'}} />
      </div>}
      <input ref={ref} type='file' accept='image/jpeg,image/png' style={{ display: 'none' }} onChange={onChange} />
    </div>
  );
}

export default Dropzone;
