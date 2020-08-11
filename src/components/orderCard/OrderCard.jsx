//  libraries
import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

//  styles
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import useStyles from './styles';

function OrderCard() {
  const classes = useStyles();

  const location = (cityTitle, dateSpan) => (
    <Box display='inline-block'>
      <h3 className={classes.cityTitle}>{cityTitle}</h3>
      <span className={classes.littleSpan}>{dateSpan}</span>
    </Box>
  );

  return (
    <Card className={classes.card}>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb='1rem'>
        <span className={classes.mainReference}>89358464855-1</span>
        <span className={classes.dateSpan}>feb 15th</span>
        <IconButton className={classes.optionsButton} aria-label='more options'>
          <MoreVertOutlinedIcon />
        </IconButton>
      </Box>
      <div className={classes.cardContent}>
        <div className={classes.routeSection}>
          <div>
            {location('Miami, FL', 'Feb 15 2019')}
            <ArrowForwardIcon className={classes.arrowIcon} />
            {location('Orlando, FL', 'Feb 20 2019')}
            <span className={classes.statusText}>In transit</span>
            <div className={classes.locationText}>
              <LocationOnOutlinedIcon className={classes.locationIcon} /><span>Tampa, FL</span>
            </div>
            <Box display='flex' justifyContent='space-between' width='100%' mx='0'>
              <hr className={classes.hr} />
              <hr className={classes.hr} />
              <hr className={classes.hr} />
              <hr className={classes.hr} />
            </Box>
          </div>
          <Box display={['flex', 'flex', 'none']} flexWrap='wrap' justifyContent='space-between' alignItems='center' width='100%'>
            <div className={classes.secondaryReference}>
              <p><b>IN</b> <span>98544843-34</span></p>
              <p><b>PO</b> <span>2017-234</span></p>
            </div>
            <div className={`${classes.status} ${classes.onlyMobile}`}>
              <span className={classes.carrierStatus}>RE</span>
              <span className={classes.customerStatus}>RF</span>
            </div>
            <div className={classes.companyInfo}>
              <img src='https://storage.googleapis.com/starckorepublicbucket/carriers/FedEx-CarrierLogo.png' width='66px' alt='company logo' />
              <p className={classes.companyName}>Company</p>
            </div>
          </Box>
        </div>
        <Box display={['none', 'none', 'block']} className={classes.secondaryReference}>
          <p><b>IN</b> <span>98544843-34</span></p>
          <p><b>PO</b> <span>2017-234</span></p>
        </Box>
        <Box display={['none', 'none', 'block']} className={classes.companyInfo}>
          <img src='https://storage.googleapis.com/starckorepublicbucket/carriers/FedEx-CarrierLogo.png' width='66px' alt='company logo' />
          <p className={classes.companyName}>Company</p>
        </Box>
        <div className={classes.statusAndRateSection}>
          <Box display='flex' justifyContent='space-around' width='100%'>
            <span className={classes.littleSpan}>Status Carrier</span>
            <span className={classes.littleSpan}>Status Customer</span>
          </Box>
          <Box className={classes.status} width='100%'>
            <span className={classes.carrierStatus}>Ready To Extract</span>
            <span className={classes.customerStatus}>Extract Error</span>
          </Box>
          <div className={classes.priceInfo}>
            <h3 className={classes.price}>$ 200.99</h3>
            <h3 className={classes.price}>$ 200.99</h3>
            <span className={classes.littleSpan}>Carrier Rate</span>
            <span className={classes.littleSpan}>Costumer Rate</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default OrderCard;
