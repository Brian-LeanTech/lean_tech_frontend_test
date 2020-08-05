//  icons
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import DescriptionIcon from '@material-ui/icons/Description';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

//  components
import Dashboard from 'pages/dashboard/Dashboard';
import ShipmentList from 'pages/shipmentList/ShipmentList';
import Quote from 'pages/quote/Quote';
import Invoice from 'pages/invoice/Invoice';
import Settings from 'pages/settings/Settings';

export default [
  {
    sidebarText: 'Dashboard',
    Icon: DashboardOutlinedIcon,
    path: '/',
    Component: Dashboard,
  },
  {
    sidebarText: 'Shipment List',
    Icon: PermMediaOutlinedIcon,
    path: '/shipment-list',
    Component: ShipmentList,
  },
  {
    sidebarText: 'Quote',
    Icon: DescriptionIcon,
    path: '/quote',
    Component: Quote,
  },
  {
    sidebarText: 'Invoice',
    Icon: ReceiptOutlinedIcon,
    path: '/invoice',
    Component: Invoice,
  },
  {
    sidebarText: 'Settings',
    Icon: SettingsOutlinedIcon,
    path: '/settings',
    Component: Settings,
  },
];
