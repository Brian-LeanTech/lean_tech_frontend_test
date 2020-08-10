//  libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

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
  const sidebarWidth = {
    opened: isMdUp ? '17rem' : '14rem',
    closed: 57,
  };

  return (
    <>
      <Toolbar handleMenuButton={() => { setOpenSidebar(!openSidebar); }} />
      <Typography component='div' style={{ display: 'flex' }}>
        <Drawer
          open={openSidebar}
          onClose={() => setOpenSidebar(false)}
          PaperProps={{
            elevation: 3,
            className: classes.paper,
            component: 'nav',
            style: { paddingRight: openSidebar ? '2rem' : '1rem' },
          }}
          variant={isMdUp ? 'permanent' : 'temporary'}
          className={classes.drawer}
          style={{ width: showText ? sidebarWidth.opened : sidebarWidth.closed }}
        >
          <Sidebar
            isMdUp={isMdUp}
            open={openSidebar}
            width={sidebarWidth}
          />
        </Drawer>
        <main className={classes.main}>
          {children}
        </main>
      </Typography>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
