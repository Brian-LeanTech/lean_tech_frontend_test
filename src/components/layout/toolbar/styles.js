import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: 'sticky',
    top: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.secondary,
    padding: '0.5rem 4px 0.5rem 24px',
  },

  menuButton: {
    marginRight: '1rem',
  },

  img: {
    maxWidth: '100%',
    maxHeight: 33,
    display: 'none',
    '@media screen and (min-width: 600px)': {
      display: 'initial',
    },
  },

  logoText: {
    fontWeight: 500,
    '@media screen and (min-width: 600px)': {
      display: 'none',
    },
  },

  options: {
    marginLeft: 'auto',
    '@media screen and (min-width: 470px)': {
      display: 'none',
    },
  },
}));

export default useStyles;
