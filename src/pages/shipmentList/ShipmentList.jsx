//  libraries
import React, { useEffect } from 'react';

//  hooks
import { useDispatch/* , useSelector */ } from 'react-redux';

//  redux
import { ordersFetchRequest } from 'redux/ducks/orders/actions';

//  components
import Filters from 'components/filters/Filters';

//  styles
import useStyles from './styles';

function ShipmentList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const orders = useSelector((state) => state.entities.orders.data);

  useEffect(() => {
    dispatch(ordersFetchRequest());
  }, []);

  return (
    <>
      <h1 className={classes.title}>Shipment List</h1>
      <Filters />
    </>
  );
}

export default ShipmentList;
