import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  dashboardItem: {
    margin: '10px 0',
  },

  list: {
    transition: 'width 0.3s',
    [theme.breakpoints.up('md')]: {
      marginTop: '5rem',
    },
  },

  listItem: {
    paddingLeft: '1.5rem',
    minWidth: '13rem',
  },

  listItemIcon: {
    minWidth: 32,
    margin: '4px 0',
    color: theme.palette.text.primary,
  },

  listItemText: {
    marginLeft: 10,
    transition: 'width 0.3s',
  },
}));
