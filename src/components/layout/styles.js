import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    overflowX: 'hidden',
    paddingRight: '2rem',
    transition: 'paddingRight 0.3s',
  },

  drawer: {
    transition: 'width 1s',
    marginRight: '1rem',
  },

  main: {
    width: '100%',
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingLeft: theme.spacing(9),
      paddingRight: theme.spacing(9),
    },
  },
}));

export default useStyles;
