//  libraries
import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import MuiSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

//  styles
import useStyles from './styles';

function Select({ label, options }) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
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
        <MenuItem value=''><em>None</em></MenuItem>
        {options.map((option) => <MenuItem value={option.value}>{option.itemLabel}</MenuItem>)}
      </MuiSelect>
    </FormControl>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf({
    value: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    itemLabel: PropTypes.string,
  }).isRequired,
};

export default Select;
