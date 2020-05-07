import { fade, makeStyles } from '@material-ui/core/styles';

const InputTextStyle = makeStyles((theme) => ({
  container: {
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: '#F0F2F5',
    '&:hover': {
      backgroundColor: fade('#F0F2F5', 100)
    },
    width: '100%',
    height: 44,
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  },
  inputRoot: {
    fontFamily: 'Open Sans',
    fontSize: '14px',
    color: '#050505',
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