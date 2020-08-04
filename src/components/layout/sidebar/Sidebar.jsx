//  libraries
import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//  hooks
import { useHistory } from 'react-router-dom';

//  constants
import menuOptions from 'constants/pagesList';

//  styles
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import useStyles from './styles';

function Sidebar({ isMdUp, open }) {
  const classes = useStyles();
  const history = useHistory();
  // if is desktop and opened menu, or if is just mobile then show text option
  const showText = (isMdUp && open) || !isMdUp;
  return (
    <List className={classes.list} style={{ width: showText ? '13rem' : 69 }}>
      <ListItem
        onClick={() => { history.push('/'); }}
        className={`${classes.listItem} ${classes.dashboardItem}`}
        button
      >
        <ListItemIcon className={classes.listItemIcon}><DashboardOutlinedIcon /></ListItemIcon>
        {showText && <ListItemText primary='Dashboard' className={classes.listItemText} />}
      </ListItem>
      {menuOptions.slice(1).map(({ sidebarText, Icon, path }) => (
        <ListItem
          onClick={() => { history.push(path); }}
          className={classes.listItem}
          button
          key={sidebarText}
        >
          <ListItemIcon className={classes.listItemIcon}><Icon /></ListItemIcon>
          {showText && <ListItemText primary={sidebarText} className={classes.listItemText} />}
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
