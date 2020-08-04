//  libraries
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Toolbar as MuiToolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

//  styles
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import leantechLogo from 'assets/images/logo-leantech.png';
import useStyles from './styles';

function Toolbar({ handleMenuButton }) {
  const classes = useStyles();

  return (
    <MuiToolbar className={classes.appBar}>
      <IconButton
        onClick={handleMenuButton}
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
  );
}

Toolbar.propTypes = {
  handleMenuButton: PropTypes.func.isRequired,
};

export default Toolbar;
