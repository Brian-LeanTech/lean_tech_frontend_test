//  libraries
import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//  styles
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import DescriptionIcon from '@material-ui/icons/Description';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import useStyles from './styles';

function Sidebar({ isMdUp, open }) {
  // if is desktop and opened menu, or if is just mobile
  const showText = (isMdUp && open) || !isMdUp;
  const classes = useStyles();
  const menuOptions = [
    {
      text: 'Shipment List',
      icon: <PermMediaOutlinedIcon />,
      path: '',
    },
    {
      text: 'Quote',
      icon: <DescriptionIcon />,
      path: '',
    },
    {
      text: 'Invoice',
      icon: <ReceiptOutlinedIcon />,
      path: '',
    },
    {
      text: 'Settings',
      icon: <SettingsOutlinedIcon />,
      path: '',
    },
  ];
  return (
    <List className={classes.list} style={{ width: showText ? '13rem' : 69 }}>
      <ListItem className={`${classes.listItem} ${classes.dashboardItem}`} button>
        <ListItemIcon className={classes.listItemIcon}><DashboardOutlinedIcon /></ListItemIcon>
        {showText && <ListItemText primary='Dashboard' className={classes.listItemText} />}
      </ListItem>
      {menuOptions.map((menuOption) => (
        <ListItem className={classes.listItem} button key={menuOption.text}>
          <ListItemIcon className={classes.listItemIcon}>{menuOption.icon}</ListItemIcon>
          {showText && <ListItemText primary={menuOption.text} className={classes.listItemText} />}
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
