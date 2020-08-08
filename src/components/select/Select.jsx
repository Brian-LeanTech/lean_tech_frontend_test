//  libraries
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import MuiSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

//  styles
import useStyles from './styles';

function Select() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const label = 'Delivery date';
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <InputLabel className={classes.inputLabel} htmlFor='selectId'>{label}</InputLabel>
      <MuiSelect
        className={classes.select}
        labelId='selectId-label'
        id='selectId'
        value={age}
        onChange={handleChange}
        autoWidth
        label={label}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={30}>Status test test</MenuItem>
      </MuiSelect>
    </FormControl>
  );
}

export default Select;
