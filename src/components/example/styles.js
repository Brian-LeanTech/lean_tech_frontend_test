import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() => ({
  drawer: {
    border: '1px solid',
    width: '10rem',
    transition: 'width 4s',
    '&:hover': {
      width: '15rem',
    },
  },
}));
