// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general v3.2.0',
    items: [
      { title: 'One', path: '/pagetest/one', icon: ICONS.dashboard },
      { title: 'Two', path: '/pagetest/two', icon: ICONS.ecommerce },
      { title: 'Three', path: '/pagetest/three', icon: ICONS.analytics },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      {
        title: 'user',
        path: '/pagetest/user',
        icon: ICONS.user,
        children: [
          { title: 'Four', path: '/pagetest/user/four' },
          { title: 'Five', path: '/pagetest/user/five' },
          { title: 'Six', path: '/pagetest/user/six' },
        ],
      },
    ],
  },
];

export default sidebarConfig;
