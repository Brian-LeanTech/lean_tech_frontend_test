//  libraries
import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
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

function Sidebar({ open, onClose }) {
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
    <Drawer open={open} onClose={() => onClose(false)}>
      <List className={classes.list}>
        <ListItem className={classes.listItem} button style={{ margin: '10px 0' }}>
          <ListItemIcon><DashboardOutlinedIcon /></ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItem>
        {menuOptions.map((menuOption) => (
          <ListItem className={classes.listItem} button key={menuOption.text}>
            <ListItemIcon>{menuOption.icon}</ListItemIcon>
            <ListItemText primary={menuOption.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
