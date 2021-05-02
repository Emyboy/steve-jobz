import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Row } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Card from './components/Card/Card';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderDemo extends React.Component {
    state = {
        collapsed: true,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Option 1
            </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Option 2
            </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
            </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="header">
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">Steve Jobz</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ margin: '0 16px', marginTop: '5vh' }}>
                        <Row className=''>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </Row>

                    </Content>
                    {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                </Layout>
            </Layout>
        );
    }
}
