import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  card: {
    padding: '0.5rem',
    paddingBottom: '1.5rem',
    opacity: 0.9,
  },

  dateSpan: {
    marginLeft: 'auto',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 11,
  },

  mainReference: {
    color: 'rgb(33, 33, 33)',
    fontSize: 16,
  },

  optionsButton: {
    margin: 0,
    padding: 0,
  },

  cityTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',
    margin: 0,
    lineHeight: '10px',
  },

  arrowIcon: {
    opacity: 0.7,
    margin: '0 1rem',
  },

  hr: {
    display: 'inline-block',
    width: '23%',
    margin: '5px 0',
    border: 'rgb(40, 111, 241) 2px solid',
    borderRadius: 35,
  },

  statusText: {
    display: 'block',
    fontSize: 11,
    color: 'rgb(117, 117, 117)',
    width: '100%',
    textAlign: 'right',
    lineHeight: '7px',
  },

  secondaryReference: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 13,
    lineHeight: '2px',
    '& b': {
      color: '#000',
      fontWeight: 500,
    },
  },

  companyName: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 17,
    margin: 0,
    lineHeight: 0,
  },

  status: {
    height: 27,
    fontWeight: 700,
    fontSize: 15,
    display: 'flex',
  },

  carrierStatus: {
    color: 'rgb(36, 4, 199)',
    border: '1px solid rgb(212, 210, 210)',
    borderRadius: '5px 0px 0px 5px',
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderCollapse: 'collapse',
  },

  customerStatus: {
    marginLeft: -1,
    color: '#910000',
    border: '1px solid rgb(212, 210, 210)',
    borderRadius: '0px 5px 5px 0px',
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderCollapse: 'collapse',
  },

  companyInfo: {
    width: '100%',
  },
}));
