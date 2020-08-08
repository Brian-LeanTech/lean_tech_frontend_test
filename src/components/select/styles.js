import { makeStyles } from '@material-ui/core/styles';

const height = 32;
const fontSize = 12;
const borderRadius = 35;

export default makeStyles((theme) => ({
  formControl: {
    backgroundColor: 'rgba(99, 99, 99, .2)',
    height,
    borderRadius,
    '& fieldset': {
      borderColor: 'rgba(99, 99, 99, 0)',
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'red',
      },
    },
  },
  inputLabel: {
    fontSize,
    color: theme.palette.text.primary,
    transform: `translate(10px, ${height / (fontSize * 0.26)}px) scale(1)`,
    paddingTop: 0,
    paddingBottom: 0,
    height: 'auto',
    position: 'relative',
    paddingRight: 40,
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
    '& > .MuiSelect-select': {
      paddingTop: 0,
      paddingBottom: 0,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      borderRadius,
    },
  },
}));
