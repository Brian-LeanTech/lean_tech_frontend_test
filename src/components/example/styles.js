import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() => ({
  drawer: {
    border: '1px solid',
    width: '15rem',
    transition: 'width 1s',
    '&:hover': {
      width: '17rem',
    },
  },
}));
