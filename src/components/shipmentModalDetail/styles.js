import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    padding: '5rem',
    paddingTop: '1rem',
    '& p': {
      fontSize: 20,
      margin: 0,
    },
    '& h1': {
      margin: 0,
      fontSize: 25,
      alignSelf: 'end',
    },
  },

  closeButton: {
    marginLeft: 'auto',
  },

  truckIcon: {
    fontSize: '5rem',
    border: 'solid 2px',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    borderRadius: '50%',
    padding: 10,
    backgroundColor: 'rgba(35, 59, 84, 0.3)',
    marginRight: '2rem',
    gridRow: '1 / 3',
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },

  helperText: {
    color: '#000',
  },
}));
