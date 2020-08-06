import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    overflowX: 'hidden',
    paddingRight: '1rem',
  },

  drawer: {
    transition: 'width 0.3s',
    marginRight: '1rem',
  },

  main: {
    width: '100%',
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5),
    },
  },
}));

export default useStyles;
