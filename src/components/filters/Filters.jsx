//  libraries
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';

//  hooks
import { useDispatch, useSelector } from 'react-redux';

//  actions
import { filtersUpdate } from 'redux/ducks/filters/actions';

//  components
import Select from 'components/select/Select';

//  styles
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import useStyles from './styles';

// tools
import filters from './filtersList';

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

  const handleSearch = ({ target }) => {
    dispatch(filtersUpdate({ searchText: target.value }));
  };

  return (
    <Box display='flex' justifyContent='center' alignItems='center' m='2rem 0'>
      <TextField
        onChange={handleSearch}
        className={`${classes.searchInput} ${classes.onlyDesktop}`}
        variant='outlined'
        placeholder='Search for a Shipment'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchOutlinedIcon className={classes.iconSearchField} />
            </InputAdornment>
          ),
          classes: { input: classes.input },
        }}
      />
      {filters.map((filter) => (
        <Select
          key={filter.key}
          label={filter.label}
          options={filter.options}
          callback={handleSelect(filter.key)}
        />
      ))}
      <Select
        label='Origin'
        options={citiesOrigin.map((city) => ({ value: city, itemLabel: city }))}
        callback={handleSelect('origin')}
      />
      <Select
        label='Destination'
        options={citiesDestination.map((city) => ({ value: city, itemLabel: city }))}
        callback={handleSelect('destination')}
      />
      <Button
        className={`${classes.createShipmentButton} ${classes.onlyDesktop}`}
        variant='contained'
        color='primary'
        size='large'
        startIcon={<PostAddOutlinedIcon className={classes.iconButton} />}
      >
        Create Shipment
      </Button>
    </Box>
  );
}

export default Filters;
