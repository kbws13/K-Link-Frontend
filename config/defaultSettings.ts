import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * 默认设置
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'K-Link',
  pwa: true,
  iconfontUrl: '',
  token: {
    header: {
      heightLayoutHeader: 78,
      colorTextMenuSelected: '#1677ff',

    },
    sider: {
      colorTextMenuSelected: '#1677ff',
    },
  },
};

export default Settings;
