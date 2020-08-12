//  libraries
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

//  hooks
import { useDispatch } from 'react-redux';

//  redux
import { updateShipmentModal } from 'redux/ducks/shipmentModal/actions';

//  styles
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import useStyles from './styles';

function OrderCard({ order }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    shipmentId = '...',
    createdDate = '...',
    origin = '...',
    destination = '...',
    references = [],
    trackingDetails = [],
    companyName = '...',
    customerStatus = '...',
    carrierStatus = '...',
    carrierRate = [0],
    customerRate = [0],
    carrier = '...',
  } = order;

  const location = (cityTitle, dateSpan = '...') => (
    <Box display='inline-block' maxWidth='8rem'>
      <h3 className={classes.cityTitle}>{cityTitle}</h3>
      <span className={classes.littleSpan}>{dateSpan}</span>
    </Box>
  );

  return (
    <Card className={classes.card}>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb='1rem'>
        <span className={classes.mainReference}>{shipmentId}</span>
        <span className={classes.dateSpan}>{createdDate}</span>
        <IconButton
          className={classes.optionsButton}
          onClick={() => dispatch(updateShipmentModal({ open: true, shipmentId }))}
          aria-label='shipment detail'
        >
          <MoreVertOutlinedIcon />
        </IconButton>
      </Box>
      <div className={classes.cardContent}>
        <div className={classes.routeSection}>
          <div>
            {location(`${origin.city}, ${origin.state}`, origin.date)}
            <ArrowForwardIcon className={classes.arrowIcon} />
            {location(`${destination.city}, ${destination.state}`, destination.date)}
            <span className={classes.statusText}>{trackingDetails[0].status || '...'}</span>
            <div className={classes.locationText}>
              <LocationOnOutlinedIcon className={classes.locationIcon} /><span>{trackingDetails[0].location || '...'}</span>
            </div>
            <Box display='flex' justifyContent='space-between' width='100%' mx='0'>
              <hr className={classes.hr} />
              <hr className={classes.hr} />
              <hr className={classes.hr} />
              <hr
                className={classes.hr}
                style={{ borderColor: trackingDetails[0].status === 'Delivered' ? 'rgb(40, 111, 241)' : 'rgba(151, 151, 151, 0.36)' }}
              />
            </Box>
          </div>
          <Box display={['flex', 'flex', 'none']} flexWrap='wrap' justifyContent='space-between' alignItems='center' width='100%'>
            <div className={classes.secondaryReference}>
              {references.map((reference) => (
                <p key={reference.name}><b>{reference.name}</b> <span>{reference.value}</span></p>
              ))}
            </div>
            <div className={`${classes.status} ${classes.onlyMobile}`}>
              <span className={classes.carrierStatus}>{carrierStatus.slice(0, 2)}</span>
              <span className={classes.customerStatus}>{customerStatus.slice(0, 2)}</span>
            </div>
            <div className={classes.companyInfo}>
              <img src={carrier.logoUrl} width='66px' alt={`[${carrier.name} logo]`} />
              <p className={classes.companyName}>{companyName}</p>
            </div>
          </Box>
        </div>
        <Box display={['none', 'none', 'block']} className={classes.secondaryReference}>
          <p><b>IN</b> <span>98544843-34</span></p>
          <p><b>PO</b> <span>2017-234</span></p>
        </Box>
        <Box display={['none', 'none', 'block']} className={classes.companyInfo}>
          <img src={carrier.logoUrl} width='66px' alt={`[${carrier.name} logo]`} />
          <p className={classes.companyName}>{companyName}</p>
        </Box>
        <div className={classes.statusAndRateSection}>
          <Box display='flex' justifyContent='space-around' width='100%'>
            <span className={classes.littleSpan}>Status Carrier</span>
            <span className={classes.littleSpan}>Status Customer</span>
          </Box>
          <Box className={classes.status} width='100%'>
            <span className={classes.carrierStatus}>{carrierStatus}</span>
            <span className={classes.customerStatus}>{customerStatus}</span>
          </Box>
          <div className={classes.priceInfo}>
            <h3 className={classes.price}>
              $ {
              carrierRate
                .map((rate) => Number(rate.charge) || 0)
                .reduce(((accumulator, currentValue) => accumulator + currentValue), 0)
                .toFixed(2)
              }
            </h3>
            <h3 className={classes.price}>
              $ {
              customerRate
                .map((rate) => Number(rate.charge) || 0)
                .reduce(((accumulator, currentValue) => accumulator + currentValue), 0)
                .toFixed(2)
              }
            </h3>
            <span className={classes.littleSpan}>Carrier Rate</span>
            <span className={classes.littleSpan}>Costumer Rate</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

OrderCard.propTypes = {
  order: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.array,
    ]),
  ).isRequired,
};

export default OrderCard;
