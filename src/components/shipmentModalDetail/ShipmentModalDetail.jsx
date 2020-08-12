//  libraries
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

//  hooks
import { useSelector, useDispatch } from 'react-redux';

//  redux
import { updateShipmentModal } from 'redux/ducks/shipmentModal/actions';
import { ordersUpdate } from 'redux/ducks/orders/actions';

//  styles
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';
import useStyles from './styles';

function ShipmentModalDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { open, shipmentId } = useSelector((state) => state.ui.shipmentModal);
  const [newCity, setNewCity] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Edit origin city');

  const handleChange = (event) => {
    setNewCity(event.target.value);
  };

  const handleClose = () => {
    dispatch(updateShipmentModal({ open: false, shipmentId: null }));
  };

  const handleButton = () => {
    if (newCity.length < 3) {
      setHelperText('min 3 characters');
      setError(true);
      return;
    }

    if (newCity.length > 15) {
      setHelperText('max 15 characters');
      setError(true);
      return;
    }

    setError(false);
    setHelperText('Edit origin city');
    dispatch(ordersUpdate(shipmentId, newCity));
    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
        fullWidth
        maxWidth='lg'
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <CloseOutlinedIcon />
        </IconButton>
        <DialogContent className={classes.content}>
          <h1>Shipment Information #{shipmentId}</h1>
          <Box p='1rem' borderBottom='1px solid #8080804a' mt='1rem'>
            <Box display='grid' gridTemplateColumns='min-content auto'>
              <LocalShippingTwoToneIcon className={classes.truckIcon} />
              <h1>Shipment Information</h1>
              <p>
                View and update all shipment data, generate pickup requests and
                change shipment status
              </p>
            </Box>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' p='1rem' borderBottom='1px solid #8080804a' mt='1rem'>
            <FormControl error={error} className={classes.textField} variant='outlined'>
              <OutlinedInput id='component-outlined' value={newCity} onChange={handleChange} />
              <FormHelperText className={classes.helperText} id='component-helper-text'>{helperText}</FormHelperText>
            </FormControl>
            <Button
              variant='contained'
              color='primary'
              size='medium'
              onClick={handleButton}
            >
              Save!
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ShipmentModalDetail;
