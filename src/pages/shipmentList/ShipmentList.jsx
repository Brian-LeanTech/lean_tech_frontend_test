//  libraries
import React from 'react';

//  components
import Filters from 'components/filters/Filters';

//  styles
import useStyles from './styles';

function ShipmentList() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.title}>Shipment List</h1>
      <Filters />
    </>
  );
}

export default ShipmentList;
