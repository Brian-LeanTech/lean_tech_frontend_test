import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paper: {
    overflowX: 'hidden',
    paddingRight: '1rem',
  },

  drawer: {
    transition: 'width 0.3s',
  },
}));

export default useStyles;
