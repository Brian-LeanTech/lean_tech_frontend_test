//  libraries
import React from 'react';
import useStyles from './styles';

function Example() {
  const classes = useStyles();
  return (
    <div className={classes.drawer}>
      <h2>Go to Shipment List, please.</h2>
    </div>
  );
}

export default Example;
