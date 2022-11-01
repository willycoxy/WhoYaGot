import 'antd/dist/antd.min.css'
import './NavBar.css'
import Sens from './senators.png'
import Leafs from './leafs.png'
import Flames from './flames.png'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Players','sub', <TeamOutlined />, [
    getItem('Senators','1',<img src={Sens} width='40' height='40' />),
    getItem('Maple Leafs','2',<img src={Leafs} width='40' height='35' />),
    getItem('Flames', '3', <img src={Flames} width='40' height='30' />),
  ]),
  getItem('My Team', 'sub2', <UserOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Users Teams', 'sub3', <UserOutlined />),
  getItem('Signout', 'sub4', <PoweroffOutlined />),
];
const AppNavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Players</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Who Ya Got ©2022
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AppNavBar;