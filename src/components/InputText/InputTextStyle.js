import { fade, makeStyles } from '@material-ui/core/styles';

const InputTextStyle = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: '#F0F2F5',
    '&:hover': {
      backgroundColor: fade('#F0F2F5', 0.70),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8A8C90'
  },
  inputRoot: {
    fontFamily: 'Open Sans',
    fontSize: '14px',
    color: '#8A8C90',
    display: 'block',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default InputTextStyle;