//  libraries
import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

//  hooks
import { useDispatch, useSelector } from 'react-redux';

//  redux
import { ordersFetchRequest } from 'redux/ducks/orders/actions';

//  components
import Filters from 'components/filters/Filters';
import OrderCard from 'components/orderCard/OrderCard';

//  styles
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import useStyles from './styles';

function ShipmentList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data: orders, loading = false } = useSelector((state) => state.entities.orders);
  const {
    searchText = '',
    status = '',
    origin = '',
    destination = '',
  } = useSelector((state) => state.ui.filters);
  const [ordersList, setOrdersList] = useState([]);
  const [page, setPage] = useState(0);
  const perPage = 3;
  const [totalPages, setTotalPages] = useState(Math.ceil((orders.length) / perPage));

  //  initial loading
  useEffect(() => {
    dispatch(ordersFetchRequest());
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
      setTotalPages(Math.ceil((filteredOrders.length) / perPage));
      setPage(0);
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
    setTotalPages(Math.ceil((filteredOrders.length) / perPage));
    setPage(0);
  }, [orders, status, origin, destination]);

  return (
    <>
      <h1 className={classes.title}>Shipment List</h1>
      <Filters />
      {loading && <LinearProgress color='secondary' />}
      {ordersList.slice(perPage * page, perPage * (page + 1)).map((order) => (
        <OrderCard order={order} key={order.shipmentId} />
      ))}
      <Box display='flex' justifyContent='center' alignItems='center'>
        <IconButton onClick={() => setPage((p) => p - 1)} disabled={page === 0}>
          <NavigateBeforeOutlinedIcon />
        </IconButton>
        <span>{page + 1}</span>
        <IconButton onClick={() => setPage((p) => p + 1)} disabled={page >= totalPages - 1}>
          <NavigateNextOutlinedIcon />
        </IconButton>
      </Box>
      <Typography variant='body2' align='center'>Total pages: {totalPages}</Typography>
    </>
  );
}

export default ShipmentList;
