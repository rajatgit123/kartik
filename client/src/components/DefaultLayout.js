import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  DashboardOutlined,
  LogoutOutlined,
  CloseCircleOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import User from '../pages/User';
import Home from '../pages/Home';
import { Route, Link } from 'react-router-dom';

// import logo from '/client/public/logo192.png' ;

const { Header, Sider, Content } = Layout;

class DefaultLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
          };
    }
  

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
              {this.state.collapsed ? (<h1><img src={require("./download.png")} alt="" style={{width:"40px", height:"40px"}}/></h1>) : (<h1><img src={require("./download.png")} alt="" style={{width:"150px", height:"45px", background:"transparent"}}/></h1>)}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
          <Menu.Item key="/home" icon={<HomeOutlined />}>
            <Link to='/home' >Home</Link>
          </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0,  }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            <a href='/' style={{float:"right", textAlign:"center", paddingRight:"10px", color:"Black"}} >Log Out</a>
            
            
          
            </Header>
            <Header style={{backgroundColor: 'White', textAlign:'center', fontWeight:'bold', }}>
            {this.props.header}            
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '10px 10px',
              padding: 10,
              minHeight: 280,
              
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout