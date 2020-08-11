import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    padding: '0.5rem',
    paddingBottom: '1.5rem',
    opacity: 0.9,
    marginBottom: '2rem',
    overflowX: 'auto',
  },

  cardContent: {
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      justifyContent: 'space-between',
      gap: '1rem',
      gridTemplateColumns: '3fr 1fr',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '3fr 1fr 1fr auto',
    },
  },

  routeSection: {
    maxWidth: 541,
    minWidth: 312,
  },

  statusAndRateSection: {
    maxWidth: 260,
    display: 'none',
    minWidth: 180,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
      height: 'max-content',
      justifyContent: 'flex-end',
    },
  },

  littleSpan: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 11,
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
    lineHeight: '16px',
  },

  arrowIcon: {
    opacity: 0.7,
    margin: '0 1rem',
  },

  hr: {
    display: 'inline-block',
    width: '23%',
    margin: '5px 0',
    marginTop: 2,
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
    marginTop: -7,
    [theme.breakpoints.up('sm')]: {
      marginTop: -30,
      fontSize: 13,
      fontWeight: 500,
    },
  },

  locationText: {
    display: 'none',
    textAlign: 'right',
    color: 'rgba(150, 148, 144, 0.46)',
    fontSize: 16,
    fontWeight: 700,
    margin: 'auto 0',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      alignItems: 'center',
      marginTop: 3,
    },
  },

  locationIcon: {
    color: 'rgb(226, 170, 7)',
    marginRight: 5,
  },

  secondaryReference: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 13,
    lineHeight: '5px',
    width: 'max-content',
    margin: 0,
    marginRight: 'auto',
    '& b': {
      color: '#000',
      fontWeight: 500,
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
    },
  },

  companyName: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 17,
    margin: 0,
    lineHeight: '15px',
  },

  status: {
    fontWeight: 700,
    fontSize: 15,
    display: 'flex',
    justifyContent: 'center',
  },

  carrierStatus: {
    color: 'rgb(36, 4, 199)',
    border: '1px solid rgb(212, 210, 210)',
    borderRadius: '5px 0px 0px 5px',
    padding: '5px 0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '5rem',
  },

  customerStatus: {
    marginLeft: -1,
    color: '#910000',
    border: '1px solid rgb(212, 210, 210)',
    borderRadius: '0px 5px 5px 0px',
    padding: '5px 0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '5rem',
  },

  companyInfo: {
    width: '100%',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: 'initial',
    },
  },

  priceInfo: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 0,
    textAlign: 'center',
  },

  price: {
    marginBottom: 0,
    fontSize: 20,
  },

  onlyMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  hideOnDesktop: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
