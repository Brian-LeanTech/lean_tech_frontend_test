import { makeStyles } from '@material-ui/core/styles';

const height = 32;
const fontSize = 12;
const borderRadius = 35;

export default makeStyles(() => ({
  formControl: {
    backgroundColor: 'rgba(99, 99, 99, .2)',
    height,
    borderRadius,
    margin: '0 5px',
    '& fieldset': {
      borderColor: 'rgba(99, 99, 99, 0)',
    },
  },

  inputLabel: {
    fontSize,
    color: 'rgba(0, 0, 0, .54)',
    transform: `translate(10px, ${height / (fontSize * 0.26)}px) scale(1)`,
    paddingTop: 0,
    paddingBottom: 0,
    height: 'auto',
    position: 'relative',
    paddingRight: 45,
    svg: {
      top: fontSize * 0.5,
    },
  },

  select: {
    height: 'inherit',
    marginTop: -fontSize,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius,
    paddingRight: '1rem',
    '& > .MuiSelect-select': {
      paddingTop: 0,
      paddingBottom: 0,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      borderRadius,
      '&:focus': {
        backgroundColor: 'rgba(0,0,0,0)',
      },
    },
  },
}));
