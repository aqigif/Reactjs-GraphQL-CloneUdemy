import { fade, makeStyles } from '@material-ui/core/styles';

const InputTextStyle = makeStyles((theme) => ({
  container: {
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: 'rgba(5,5,5,0.1)',
    '&:hover': {
      backgroundColor: fade('#a67fdc', 100),
      color: '#050505'
    },
    width: '100%',
    height: 44,
    display: 'flex',
    alignItems: 'center'
  },
  inputRoot: {
    fontFamily: 'Open Sans',
    fontSize: '14px',
    color: '#FFFFFF',
    display: 'flex',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '100%',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px'
  },
}));

export default InputTextStyle;