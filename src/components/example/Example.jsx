//  libraries
import React from 'react';
import useStyles from './styles';

function Example() {
  const classes = useStyles();
  return (
    <div className={classes.drawer}>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Example;
