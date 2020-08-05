//  libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';

//  hooks
import useMediaQuery from '@material-ui/core/useMediaQuery';

//  components
import Sidebar from './sidebar/Sidebar';
import Toolbar from './toolbar/Toolbar';

//  styles
import useStyles from './styles';

function Layout({ children }) {
  const classes = useStyles();
  const isMdUp = useMediaQuery(((theme) => theme.breakpoints.up('md')), { noSsr: true });
  const [openSidebar, setOpenSidebar] = useState(isMdUp);
  const showText = (isMdUp && openSidebar) || !isMdUp;

  return (
    <>
      <Toolbar handleMenuButton={() => { setOpenSidebar(!openSidebar); }} />
      <Box display='flex'>
        <Drawer
          open={openSidebar}
          onClose={() => setOpenSidebar(false)}
          PaperProps={{ elevation: 3, className: classes.paper }}
          variant={isMdUp ? 'permanent' : 'temporary'}
          className={classes.drawer}
          style={{ width: showText ? '13rem' : 69 }}
        >
          <Sidebar isMdUp={isMdUp} open={openSidebar} />
        </Drawer>
        <Box component='main' p='3rem'>
          {children}
        </Box>
      </Box>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
