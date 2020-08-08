import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    fontSize: 20,
    color: '#757575',
    fontWeight: 500,
    marginTop: 5,
    [theme.breakpoints.up('md')]: {
      fontWeight: 900,
    },
  },
}));
