//  libraries
import React, { useEffect, useState } from 'react';

//  hooks
import { useDispatch, useSelector } from 'react-redux';

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
  const orders = useSelector((state) => state.entities.orders?.data || []);
  const [ordersList, setOrdersList] = useState([]);
  const {
    searchText = '',
    status = '',
    origin = '',
    destination = '',
  } = useSelector((state) => state.ui.filters);

  //  initial loading
  useEffect(() => {
    dispatch(ordersFetchRequest((response) => setOrdersList(response)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  Search bar filter by: origin, destination, customerStatus, id
  useEffect(() => {
    if (searchText.length % 2 === 0 && orders.length > 0) {
      const lowerCase = searchText.toLowerCase();
      const filteredOrders = orders.filter((order) => order.companyName
        .toLowerCase().includes(lowerCase)
        || order.customerStatus.toLowerCase().includes(lowerCase)
        || order.origin.city.toLowerCase().includes(lowerCase)
        || order.destination.city.toLowerCase().includes(lowerCase)
        || order.shipmentId.toString().toLowerCase().includes(lowerCase));
      setOrdersList(filteredOrders);
    }
  }, [orders, searchText]);

  //  Select filters
  useEffect(() => {
    let filteredOrders = orders;
    if (status) {
      filteredOrders = filteredOrders.filter(({ customerStatus }) => customerStatus === status);
    }
    if (origin) {
      filteredOrders = filteredOrders.filter(({ origin: item }) => item.city === origin);
    }
    if (destination) {
      filteredOrders = filteredOrders.filter(({ destination: item }) => item.city === destination);
    }
    setOrdersList(filteredOrders);
  }, [orders, status, origin, destination]);

  return (
    <>
      <h1 className={classes.title}>Shipment List</h1>
      <Filters />
      {ordersList.map((order) => (
        <OrderCard order={order} key={order.shipmentId} />
      ))}
    </>
  );
}

export default ShipmentList;
