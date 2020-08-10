import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  onlyDesktop: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  searchInput: {
    marginRight: 'auto',
    width: '50%',
    height: 65,
    maxWidth: 675,
    backgroundColor: '#fff',
    boxShadow: '0px 0px 24px 0px rgba(0,0,0,.1)',
    '& .MuiOutlinedInput-root': {
      height: '100%',
      '& fieldset': {
        borderColor: '#ececec',
      },
    },
  },

  dateRangeInput: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#CBD6E2',
      },
    },
    '& input': {
      color: '#1B1B1B',
      '&::placeholder': {
        fontSize: 14,
      },
    },
  },

  input: {
    '&::placeholder': {
      fontStyle: 'italic',
      fontSize: 20,
      color: '#000',
      fontWeight: 300,
    },
  },

  createShipmentButton: {
    marginLeft: 'auto',
    height: 58,
    width: 229,
    borderRadius: 35,
    fontSize: 20,
    fontWeight: 500,
    textTransform: 'none',
    lineHeight: 1.1,
  },

  iconButton: {
    '&:first-child': {
      fontSize: 30,
    },
  },

  iconSearchField: {
    color: 'rgba(125, 125, 125, .4)',
    '&:first-child': {
      fontSize: 30,
      marginRight: 10,
    },
  },
}));
