//  libraries
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

//  hooks
import { useSelector, useDispatch } from 'react-redux';

//  redux
import { updateShipmentModal } from 'redux/ducks/shipmentModal/actions';

function ShipmentModalDetail() {
  const dispatch = useDispatch();
  const { open, shipmentId } = useSelector((state) => state.ui.shipmentModal);

  const handleClose = () => {
    dispatch(updateShipmentModal({ open: false, shipmentId: null }));
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
      >
        <DialogContent>
          <p>{shipmentId}</p>
          {[...new Array(200)]
            .map(
              () => 'Modal in progress...',
            )
            .join('\n')}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ShipmentModalDetail;
