//  libraries
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Select from 'components/select/Select';

import useStyles from './styles';

const filters = [
  {
    label: 'Status',
    options: [
      {
        value: 'delivered',
        itemLabel: 'Delivered',
      },
      {
        value: 'In transit',
        itemLabel: 'in transit',
      },
      {
        value: 'Picked up',
        itemLabel: 'Picked up',
      },
    ],
  },
];

function Filters() {
  const classes = useStyles();

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <TextField className={classes.searchInput} variant='outlined' />
      {filters.map((filter) => <Select label={filter.label} options={filter.options} />)}
    </Box>
  );
}

export default Filters;
