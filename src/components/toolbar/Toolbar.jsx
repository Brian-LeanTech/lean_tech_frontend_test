//  libraries
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { Toolbar as MuiToolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

//  styles
import MenuIcon from '@material-ui/icons/Menu';
import leantechLogo from 'assets/images/logo-leantech-header.png';
import useStyles from './styles';

function Toolbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position='sticky' className={classes.appBar}>
        <MuiToolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Link to='/'>
            <img src={leantechLogo} alt='Leantech logo' />
          </Link>
        </MuiToolbar>
      </AppBar>
      <p>SOY EL NUMERO 1</p>
      {Array(1000).fill('line of text').map((p) => <p>{p}</p>)}
    </>
  );
}

export default Toolbar;
