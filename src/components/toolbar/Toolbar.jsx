//  libraries
import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Toolbar as MuiToolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

//  components
import Sidebar from 'components/sidebar/Sidebar';

//  styles
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import leantechLogo from 'assets/images/logo-leantech.png';
import useStyles from './styles';

function Toolbar() {
  const classes = useStyles();
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <MuiToolbar className={classes.appBar}>
        <IconButton
          onClick={() => setOpenSidebar(!openSidebar)}
          className={classes.menuButton}
          edge='start'
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <Link to='/'>
          <img src={leantechLogo} alt='Leantech logo' className={classes.img} />
        </Link>
        <Link to='/'>
          <Typography variant='h5' component='span' color='textSecondary' className={classes.logoText}>
            Lean Tech
          </Typography>
        </Link>
        <IconButton
          color='inherit'
          aria-label='Additional options'
          className={classes.options}
        >
          <MoreIcon />
        </IconButton>
      </MuiToolbar>
      <Sidebar open={openSidebar} onClose={setOpenSidebar} />
    </>
  );
}

export default Toolbar;
