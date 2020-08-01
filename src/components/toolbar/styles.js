import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    padding: '0.4rem',
  },
  menuButton: {
    marginRight: '1.3rem',
  },
}));

export default useStyles;
