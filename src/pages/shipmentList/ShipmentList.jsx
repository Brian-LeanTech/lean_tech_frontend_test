//  libraries
import React, { useEffect } from 'react';

//  hooks
import { useDispatch/* , useSelector */ } from 'react-redux';

//  redux
import { ordersFetchRequest } from 'redux/ducks/orders/actions';

//  components
import Filters from 'components/filters/Filters';
import OrderCard from 'components/orderCard/OrderCard';

//  styles
import useStyles from './styles';

function ShipmentList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const orders = useSelector((state) => state.entities.orders.data);

  useEffect(() => {
    dispatch(ordersFetchRequest());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className={classes.title}>Shipment List</h1>
      <Filters />
      <OrderCard />
    </>
  );
}

export default ShipmentList;
