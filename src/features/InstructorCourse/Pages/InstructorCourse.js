import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import CourseCard from '../../../components/CourseCard.js/CourseCard';
import { GET_COURSES } from '../../Course/actions';
import { withRouter } from 'react-router-dom';
import { Button, makeStyles, Modal, Snackbar } from '@material-ui/core';
import '../../Course/Course.scss';
import '../InstructorCourse.scss';
import InputSmallText from '../../../components/InputText/InputSmallText';
import Dropzone from '../../../components/Dropzone/Dropzone'
import { CREATECOURSE } from '../actions';
import { apiUrl } from '../../../utils/client';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '4px',
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    display: 'flex',
    flexDirection: 'column'
  },
}));

const HomeDiscover = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const { loading, error, data } = useQuery(GET_COURSES);
  const dataCourses = data?.courses;
  
  const goToCourseDetail = (id) => {
    const { history } = props;
    // history.push(`/course/${id}`);
  }
  const [open, setOpen] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState({
    message: '',
    severity: 'warning',
  });
  const [values, setValues] = React.useState({
    title: '',
    description: '',
    cover: '',
    coverView: ''
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleChange = (prop) => async (event) => {
    setValues({ ...values, [prop]: event?.target ? event.target.value : event  });
  };
  const onUploadChange = async(event) => {
    const photo = event.target.files[0];
    handleChange('cover')(photo);
    const data = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
    const base64 = await data;
    handleChange('coverView')(base64);
  }
  const handleCancel = () => {
    setValues({
      title: '',
      description: '',
      cover: '',
      coverView: ''
    })
    handleClose();
  }

  const createCourse = () => {
    console.log(localStorage.getItem('token'))
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        query: CREATECOURSE,
        variables: {
          input: {
            title: values.title,
            description: values.description,
            // cover: values.cover,
          }
        }
      })
    })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        if(data?.errors){
          setOpenSnackbar(true);
          setSnackbar({
            message: 'Sorry, Error while create the course', 
            severity:'error'
          })
        } else {
          setOpenSnackbar(true);
          setSnackbar({
            message: 'Success, Course has been Created', 
            severity: 'success'
          });
          handleCancel();
        }
      });
  }
  const body = (
    <div className={classes.paper}>
      <span className='modal-title'>Create New Course</span>
      <span className='modal-label'>Course Title</span>
      <InputSmallText onChange={handleChange('title')} value={values.title}/>
      <span className='modal-label'>Descriptions</span>
      <InputSmallText onChange={handleChange('description')} value={values.description}/>
      <span className='modal-label'>Cover</span>
      <Dropzone onChange={onUploadChange} value={values.coverView} />
      <div className='modal-action' >
        <div className='margin-button-horizontal' id='button-primary'>
          <Button variant="outlined" color="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
        <div className='margin-button-horizontal' id='button-primary'>
          <Button variant="contained" color="primary" onClick={createCourse}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
  return (
    <div className="course-list-container">
      <div className="course-headers">
        <span>Created Course</span>
        <div id='button-primary'>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            New Course
          </Button>
        </div>
      </div>
      <div className="course-list">
        {dataCourses && dataCourses.map((item, i) =>(
          <CourseCard
            key={i}
            thumbnail={item.cover}
            title={item.title}
            description={item.description}
            onClick={(e) => goToCourseDetail(item.id)}
          />))}
      </div>
      <div id="modal-custom">
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        disableAutoFocus={true}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <Snackbar 
        anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
        open={openSnackbar} autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      </div>
    </div>
  );
}

export default withRouter(HomeDiscover);
