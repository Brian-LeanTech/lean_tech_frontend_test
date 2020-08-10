import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  list: {
    transition: 'width 0.3s',
    opacity: 0.8,
    [theme.breakpoints.up('md')]: {
      marginTop: '5rem',
    },
  },

  listItem: {
    borderRadius: '0 40px 40px 0',
    padding: 0,
    margin: '1rem 0',
    height: 57,
  },

  dashboardItem: {
    margin: '1.5rem 0',
  },

  listItemIcon: {
    minWidth: 32,
    margin: 'auto 24px',
    marginRight: 0,
    color: theme.palette.text.primary,
  },

  listItemText: {
    marginLeft: 10,
    minWidth: '13rem',
    transition: 'width 0.3s',
    '& .MuiTypography-body1': {
      fontWeight: 'inherit',
      fontSize: 23,
    },
  },

  link: {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    fontStyle: 'inherit',
    color: 'inherit',
    textDecoration: 'inherit',
    minWidth: '100%',
    padding: '6px 0',
    display: 'flex',
    alignItems: 'center',
  },

  activeNav: {
    backgroundColor: theme.palette.primary.darkBackground,
    fontWeight: 900,
  },
}));
