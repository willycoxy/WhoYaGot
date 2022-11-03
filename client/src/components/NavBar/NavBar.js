import 'antd/dist/antd.min.css'
import './NavBar.css'
//import Sens from './senators.png'
//import Leafs from './leafs.png'
//import Flames from './flames.png'
import {
  TeamOutlined,
  UserOutlined,
  LoginOutlined,
  PoweroffOutlined,
  LogoutOutlined
  
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      getItem('All Players','200',<Link to="/home"/> ),
      getItem('Bruins','1',<Link to="/Bruins"/> ),
      getItem('Sabers','2',<Link to="/Sabers"/>),
      getItem('Red Wings', '3', <Link to="/RedWings"/>),
      getItem('Canadiens','4',<Link to="/Canadiens"/> ),
      getItem('Senators','5',<Link to="/Senators"/> ),
      getItem('Ligthning','6',<Link to="/Lightning"/> ),
      getItem('Maple Leafs','7',<Link to="/MapleLeafs"/> ),
      getItem('Panthers','8',<Link to="/Panthers"/> ),
      getItem('Hurricanes','9',<Link to="/Hurricanes"/> ),
      getItem('Devils','10',<Link to="/Devils"/> ),
      getItem('Islanders','11',<Link to="/Islanders"/> ),
      getItem('Rangers','12',<Link to="/Rangers"/> ),
      getItem('Flyers','13',<Link to="/Flyers"/> ),
      getItem('Penguins','14',<Link to="/Penguins"/> ),
      getItem('Capitals','15',<Link to="/Capitals"/> ),
      getItem('Blue Jackets','16',<Link to="/BlueJackets"/> ),
      getItem('Blackhawks','17',<Link to="/Blackhawks"/> ),
      getItem('Stars','18',<Link to="/Stars"/> ),
      getItem('Avalanche','19',<Link to="/Avalanche"/> ),
      getItem('Blues','20',<Link to="/Blues"/> ),
      getItem('Predators','21',<Link to="/Predators"/> ),
      getItem('Jets','22',<Link to="/Jets"/> ),
      getItem('Wild','23',<Link to="/Wild"/> ),
      getItem('Flames','24',<Link to="/Flames"/> ),
      getItem('Oilers','25',<Link to="/Oilers"/> ),
      getItem('Kings','26',<Link to="/Kings"/> ),
      getItem('Sharks','27',<Link to="/Sharks"/> ),
      getItem('Canucks','28',<Link to="/Canucks"/> ),
      getItem('Coyotes','29',<Link to="/Coyotes"/> ),
      getItem('Ducks','30',<Link to="/Ducks"/> ),
      getItem('Golden Knights','35',<Link to="/GoldenKnights"/> ),
      getItem('Kraken','36',<Link to="/Kraken"/> ),
    ]),
      getItem('My Team', 'sub2', <UserOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
      getItem('Users Teams', 'sub3', <UserOutlined />),
      getItem('Sign Up', 'sub4', <Link to="/signup"><LoginOutlined /></Link>  ),
      getItem('Login', 'sub5', <Link to="/login"><LogoutOutlined /></Link>  ),
      getItem('Signout', 'sub6', <Link to="/login"><PoweroffOutlined /></Link>
      ),
    ];

const AppNavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout
        style={{
        minHeight: '100vh',
        }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
          </Sider>
                <Layout className="site-layout">
                  <Header
                    className="site-layout-background"
                      style={{
                      padding: 0,
                    }}/>
                        <Content
                          style={{
                          margin: '0 16px',
                          }}>
                              <div
                                className="site-layout-background"
                                    style={{
                                      padding: 24,
                                      minHeight: 360,
                                    }}>
                              </div>
                        </Content>
                          <Footer
                            style={{
                              textAlign: 'center',
                            }}>
                              Who Ya Got ©2022
                          </Footer>
                </Layout>
      </Layout>
    );
};
export default AppNavBar;