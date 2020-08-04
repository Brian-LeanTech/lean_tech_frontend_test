import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paper: {
    overflowX: 'hidden',
  },

  drawer: {
    transition: 'width 0.3s',
  },
}));

export default useStyles;
