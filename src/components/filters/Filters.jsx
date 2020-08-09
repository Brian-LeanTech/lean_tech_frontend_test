//  libraries
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

//  hooks
import { useDispatch, useSelector } from 'react-redux';

//  actions
import { filtersUpdate } from 'redux/ducks/filters/actions';

//  components
import Select from 'components/select/Select';

// tools
import filters from './filtersList';

//  styles
import useStyles from './styles';

function Filters() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const citiesOrigin = useSelector((state) => state.entities.orders.data
    .map((order) => order.origin.city)
    .sort()
    .filter((city, index, array) => city !== array[index + 1]));
  const citiesDestination = useSelector((state) => state.entities.orders.data
    .map((order) => order.destination.city)
    .sort()
    .filter((city, index, array) => city !== array[index + 1]));

  const handleSelect = (key) => (value) => {
    dispatch(filtersUpdate({ [key]: value }));
  };

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <TextField className={classes.searchInput} variant='outlined' />
      {filters.map((filter) => (
        <Select
          key={filter.label}
          label={filter.label}
          options={filter.options}
          callback={handleSelect(filter.label)}
        />
      ))}
      <Select
        label='origin'
        options={citiesOrigin.map((city) => ({ value: city, itemLabel: city }))}
        callback={handleSelect('origin')}
      />
      <Select
        label='destination'
        options={citiesDestination.map((city) => ({ value: city, itemLabel: city }))}
        callback={handleSelect('destination')}
      />
    </Box>
  );
}

export default Filters;
