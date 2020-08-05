//  libraries
import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//  hooks
import { NavLink } from 'react-router-dom';

//  constants
import menuOptions from 'constants/pagesList';

//  styles
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import useStyles from './styles';

function Sidebar({ isMdUp, open }) {
  const classes = useStyles();
  const showText = (isMdUp && open) || !isMdUp;
  return (
    <List component='nav' className={classes.list} style={{ width: showText ? '14rem' : 57 }}>
      <ListItem
        className={`${classes.listItem} ${classes.dashboardItem}`}
        button
      >
        <NavLink
          exact
          to='/'
          className={`${classes.link} ${classes.listItem}`}
          activeClassName={`${classes.activeNav}`}
        >
          <ListItemIcon className={classes.listItemIcon}><DashboardOutlinedIcon /></ListItemIcon>
          {showText && <ListItemText primary='Dashboard' className={classes.listItemText} />}
        </NavLink>
      </ListItem>
      {menuOptions.slice(1).map(({ sidebarText, Icon, path }) => (
        <ListItem
          className={classes.listItem}
          button
          key={sidebarText}
        >
          <NavLink
            to={path}
            className={`${classes.link} ${classes.listItem}`}
            activeClassName={`${classes.activeNav}`}
          >
            <ListItemIcon className={classes.listItemIcon}><Icon /></ListItemIcon>
            {showText && <ListItemText primary={sidebarText} className={classes.listItemText} />}
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
}

Sidebar.propTypes = {
  isMdUp: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Sidebar;
