import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { ReactDOM } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { PageHeader, Button } from 'antd';
import '../index.css';
import 'antd/dist/antd.css';

const { Header } = Layout;

const Nav = () => {
    const { keycloak, initialized } = useKeycloak();
 return (
   ReactDOM.render(
        <div >
        <PageHeader 
              title="Login Page"
              subTitle="(Test Page)"
              extra = {[
          <Button key="1">
              <a href="/secured">
                 Login
               </a>
          </Button>
       ]} >
        </PageHeader>
        </div>
   )
 );
};

export default Nav;