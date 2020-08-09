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
    .map((order) => order.origin.city));
  const citiesDestination = useSelector((state) => state.entities.orders.data
    .map((order) => order.destination.city));
  const allCities = [...citiesOrigin, ...citiesDestination]
    .sort().filter((city, index, array) => city !== array[index + 1]);

  const handleStatus = (value) => {
    dispatch(filtersUpdate({ status: value }));
  };

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <TextField className={classes.searchInput} variant='outlined' />
      {filters.map((filter) => (
        <Select
          key={filter.label}
          label={filter.label}
          options={filter.options}
          callback={handleStatus}
        />
      ))}
      <Select
        label='city'
        options={allCities.map((city) => ({ value: city, itemLabel: city }))}
        callback={handleStatus}
      />
    </Box>
  );
}

export default Filters;
