// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - Company ||============================== //

const company = {
  id: 'group-company',
  title: 'Company',
  type: 'group',
  children: [
    {
      id: 'company',
      title: 'Company',
      type: 'item',
      url: 'company',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default company;
